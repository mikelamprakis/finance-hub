import React from 'react'
import {Typography, Row, Col, Statistic} from 'antd';
import {Link} from 'react-router-dom';
import {useGetCryptosQuery} from '../services/cryptoApi';
import {useRetrieveStocksForGivenCountryQuery} from '../services/stocksApi'
import {useGetStockDetailsQuery} from '../services/stockDetailsApi'
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

const { Title} = Typography;

function Homepage() {

  const {data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  const {stocks} = useRetrieveStocksForGivenCountryQuery();
 
  console.log( useGetStockDetailsQuery('APPL', 'US'))

  // if (loading) return 'loading...';
  if (isFetching) return 'loading...';

  return (
    <div>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={globalStats.totalExchanges}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={globalStats.totalMarketCap}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={globalStats.total24hVolume}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={globalStats.totalMarkets}/>
        </Col>
      </Row>

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptos In The World</Title>
        <Title level={3} className='show-more'>
          <Link to='/cryptocurrencies'>Show more</Link>
        </Title>
      </div>

      <Cryptocurrencies simplified />

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3}>
          <Link to='/news'>Show more</Link>
        </Title>
      </div>

      <News simplified />

    </div>
  )
}

export default Homepage
