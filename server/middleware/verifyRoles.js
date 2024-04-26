const verifyRoles = () => {
    return (req, res, next) => {
        if (!req?.isCreator) return res.sendStatus(401);
        const isCreator = req.isCreator
        const result = isCreator
        if (!result) return res.sendStatus(401);
        next();
    }
}

module.exports = verifyRoles