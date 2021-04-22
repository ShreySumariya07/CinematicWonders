import React from 'react'
import { useGlobalContext } from '../../context'

const Sidebar = () => {
    const {isSidebarOpen,openSidebar,closeSidebar} = useGlobalContext();
    return (
        <h1>Hello</h1>
    );
}

export default Sidebar