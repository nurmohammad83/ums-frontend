"use client"

import React, { useState } from 'react';

import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { USER_ROLE } from '@/constants/role';
import defaultSidebarItem from '@/constants/defaultSidebarItem';
import { getUserInfo } from '@/services/auth.service';

const { Sider } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const {role} = getUserInfo() as any


    const {
      token: { colorBgContainer },
    } = theme.useToken();
  return (
    <Sider 
    collapsible
     collapsed={collapsed} 
     onCollapse={(value) => setCollapsed(value)}
     width={280}
     style={{
        overflow:'auto',
        height:'100vh',
        position:'sticky',
        left:0,
        top:0,
        bottom:0

     }}
     >
    <div style={{
        color:'white',
        fontSize:'2rem',
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:'.5rem',
        padding:'10px 0'
    }}>
        University <br /> Management
    </div>
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={defaultSidebarItem(role)} />
  </Sider>
  )
}
export default Sidebar