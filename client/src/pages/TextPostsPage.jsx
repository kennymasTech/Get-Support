import React from "react";
import SidebarWithHeader from "../component/SidebarWithHeader";
import TextPosts from "../component/TextPosts";

const TextPostsPage = () => {
  return (
    <>
      <SidebarWithHeader>
        <TextPosts />
      </SidebarWithHeader>
    </>
  );
};

export default TextPostsPage;
