import React from 'react'
import SidebarWithHeader from '../component/SidebarWithHeader'
import { Flex } from '@chakra-ui/react'
import Posts from '../component/Posts'

const PostsPage = () => {
  return (
    <>
    <SidebarWithHeader >
    <Posts />
    </SidebarWithHeader>
    </>
  )
}

export default PostsPage