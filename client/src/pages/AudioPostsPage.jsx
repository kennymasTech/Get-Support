import React from "react";
import AudioPosts from "../component/AudioPosts";
import SidebarWithHeader from "../component/SidebarWithHeader";

const AudioPostsPage = () => {
  return (
    <>
      <SidebarWithHeader>
        <AudioPosts />
      </SidebarWithHeader>
    </>
  );
};

export default AudioPostsPage;
