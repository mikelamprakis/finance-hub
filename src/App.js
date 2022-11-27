import React from 'react'
import './App.css'
import './nav.css'
import  {BrowserRouter as Router , Switch, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';  
import {Cryptocurrencies, CryptoDetails, Stocks, StockDetails, Homepage,  NavBar, News} from './components'


const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <NavBar/>
        </div>
        <div className='main'> 
            <Layout>
                <div className='routes'>
                    <Switch>

                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/cryptocurrencies" component={Cryptocurrencies} />
                        <Route exact path="/news" component={News} />
                        <Route exact path="/crypto/:coinId"  component={CryptoDetails} />
                        <Route exact path="/stocks/"  component={Stocks} />
                        <Route exact path="/stocks/:stockId"  component={StockDetails} />

                        

                    </Switch>
                </div>
            </Layout>

            <div className='footer'>
                <Typography.Title level={5} style={{color:'white', textAlign: 'center'}}>
                    Copyright 2022 
                    <Link to="/">Finance Hub</Link>
                    <br/>
                    All Rights Reserved.
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/news">News</Link>
                </Space>
            </div>
        
        </div>
       
    </div>
  )
}

export default App;
