import React from 'react';
//import * as FaIcons from 'react-icons/fa';
import './Navigation.css';

import * as AiIcons from 'react-icons/ai';
//import * as IoIcons from 'react-icons/io'; 

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Products',
        path:'/products',
        icon:<AiIcons.AiOutlinePieChart />,
        cName:'nav-text'
    },
    {
        title:'Cart',
        path:'/cart',
        icon:<AiIcons.AiFillContainer />,
        cName:'nav-text'
    },
    {
        title:'User Profile',
        path:'/user',
        icon:<AiIcons.AiOutlineProfile />,
        cName:'nav-text'
    },
]