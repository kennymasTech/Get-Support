import React from "react";
import SidebarWithHeader from "../component/SidebarWithHeader";
import PhotoPosts from "../component/PhotoPosts";

const PhotoPostsPage = () => {
  return (
    <>
      <SidebarWithHeader>
        <PhotoPosts />
      </SidebarWithHeader>
    </>
  );
};

export default PhotoPostsPage;
