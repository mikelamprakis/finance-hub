import React from 'react'
import {Button, Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/crypto.png';


const NavBar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} />
            <Typography.Title level={2} className='logo'>
                <Link to="/">Finance Hub</Link>
            </Typography.Title>
        </div>
        <Menu theme='dark'>
            <Menu.Item icon={< HomeOutlined/>}> 
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={< FundOutlined/>}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={< BulbOutlined/>}>
                <Link to="/news">Crypto News</Link>
            </Menu.Item>
            <Menu.Item icon={< MoneyCollectOutlined/>}>
                <Link to="/stocks">Stocks</Link>
            </Menu.Item>
        </Menu>


    </div>
  )
}

export default NavBar
