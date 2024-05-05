import React from "react";
import UserPosts from "../component/UserPosts";
import SidebarWithHeader from "../component/SidebarWithHeader";

const UserPage = () => {
  return (
    <>
    <SidebarWithHeader>
      <UserPosts />
    </SidebarWithHeader>
      
      {/* <Actions /> */}
    </>
  );
};

export default UserPage;
