const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const handleRefreshToken = async (req, res) => {
	const cookies = req.cookies;
	if (!cookies?.jwt) return res.sendStatus(401);
	const refreshToken = cookies.jwt;
	res.clearCookie("jwt", {
		httpOnly: true,
		sameSite: "None",
		secure: true,
	});

	const foundUser = await User.findOne({ refreshToken }).exec();

	//Detected refresh token reuse!
	if (!foundUser) {
		jwt.verify(
			refreshToken,
			process.env.REFRESH_TOKEN_SECRET,
			async (err, decoded) => {
				if (err) return res.sendStatus(403); //Forbidden
				// Delete refresh token from db
				const hackedUser = await User.findOne({
					username: decoded.username,
				}).exec();
				hackedUser.refreshToken = [];
				const result = await hackedUser.save();
				// console.log(result);
			}
		);
		return res.sendStatus(403);
	}

	const newRefreshTokenArray = foundUser.refreshToken.filter(
		(rt) => rt !== refreshToken
	);

	// evaluate jwt
	jwt.verify(
		refreshToken,
		process.env.REFRESH_TOKEN_SECRET,
		async (err, decoded) => {
			if (err) {
				// expired refresh token
				foundUser.refreshToken = [...newRefreshTokenArray];
				const result = await foundUser.save();
			}
			if (err || foundUser.username !== decoded.username)
				return res.sendStatus(403);

			// Refresh token was still valid
			// const roles = Object.values(foundUser.roles);
			// const roles = Object.values(foundUser.roles).filter(Boolean);
			const accessToken = jwt.sign(
				{
					UserInfo: {
						_id: foundUser._id,
						username: foundUser.username,
						isCreator: foundUser.isCreator,
						
					},
				},
				process.env.ACCESS_TOKEN_SECRET,
				{ expiresIn: "15m" }
			);

            const newRefreshToken = jwt.sign(
				{ username: foundUser.username },
				process.env.REFRESH_TOKEN_SECRET,
				{ expiresIn: "1d" }
			);

			// Saving refreshToken with current user
			foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken] 
			const result = await foundUser.save();
			// console.log(result);

			// Creates Secure Cookie with refresh token
			res.cookie("jwt", newRefreshToken, {
				httpOnly: true,
				secure: true,
				sameSite: "None",
				maxAge: 24 * 60 * 60 * 1000,
			})

			res.json({ accessToken });
		}
	);
};

module.exports = { handleRefreshToken };
