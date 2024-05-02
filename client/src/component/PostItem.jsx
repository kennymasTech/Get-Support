import {
  Avatar,
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
// import Actions from "./Actions";
import { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast";
import { formatDistanceToNow } from "date-fns";
import { DeleteIcon } from "@chakra-ui/icons";
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
// import postsAtom from "../atoms/postsAtom";

const PostItem = ({ post, postedBy }) => {
  // const [liked, setLiked] = useState(false);
  // const [user, setUser] = useState(null);
  // const showToast = useShowToast();
  // const [posts, setPosts] = useRecoilState(postsAtom)
  // const navigate = useNavigate();
  // const currentUser = useRecoilValue(userAtom);
  // console.log(post)

  // useEffect(() => {
  // 	const getUser = async () => {
  // 		try {
  // 			const res = await fetch(`/api/users/profile/${postedBy}`);
  // 			const data = await res.json();
  // 			// console.log(data);
  // 			setUser(data);
  // 			if (data.error) {
  // 				showToast("Error", data.error, "error");
  // 				return;
  // 			}
  // 		} catch (err) {
  // 			showToast("Error", err.message, "error");
  // 			setUser(null);
  // 		}
  // 	};
  // 	getUser();
  // }, [postedBy, showToast]);

  // const handleDeletePost = async (e) => {
  // 	try {
  // 		e.preventDefault();
  // 		if (!window.confirm("Are you sure you want to delete this post?")) return;

  // 		const res = await fetch(`/api/posts/${post._id}`, {
  // 			method: "DELETE",
  // 		});

  // 		const data = await res.json();

  // 		if (data.error) {
  // 			showToast("Error", data.error, "error");
  // 			return;
  // 		}
  // 		showToast("Success", "Post deleted successfully", "success");

  // 		setPosts((prev) => prev.filter((p) => p._id !== post._id));
  // 	} catch (error) {
  // 		showToast("Error", error.message, "error");
  // 	}
  // };

  // if (!user) return null;

  return (
    <Link
    // to={`/${user.username}/post/${post._id}`}
    >
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDir={"column"} alignItems={"center"}>
          <Avatar
            src={post?.user?.avatar}
            name={`${post?.user?.name} `}
            size={"md"}
            // onClick={(e) => {
            // 	e.preventDefault();
            // 	navigate(`/${user.username}`);
            // }}
          />
        </Flex>

        <Flex flex={1}  gap={2}>
          <Flex w={"full"} justifyContent={"space-between"} alignItems={'center'} >
            <Flex
			justifyContent={"center"}
              alignItems={"center"}
              // w={"full"}
              // onClick={(e) => {
              // 	e.preventDefault();
              // 	navigate(`/${user.username}`);
              // }}
            >
              <Text>{post?.user?.name}</Text>
              {/* <Image src="/verified.png" ml={1} w={4} h={4} /> */}
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-around"}
              gap={4}
              // onClick={(e) => e.preventDefault()}
            >
              <Text
                fontSize={"xs"}
                width={36}
                textAlign={"right"}
                color={"gray.light"}
              >
                {formatDistanceToNow(new Date(post.createdAt))}
              </Text>
              {
                // currentUser?._id === user._id &&
                <DeleteIcon
                  cursor={"pointer"}
                  size={20}
                  // onClick={handleDeletePost}
                />
              }
            </Flex>
          </Flex>

        </Flex>
      </Flex>
    </Link>
  );
};

export default PostItem;
