import React from 'react'
import SidebarWithHeader from '../component/SidebarWithHeader'
import Dashboard from '../component/Dashboard'

const DashboardPage = () => {
  return (
    <>
    <SidebarWithHeader>
        <Dashboard />
    </SidebarWithHeader>
    </>
  )
}

export default DashboardPage