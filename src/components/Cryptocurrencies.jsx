import React, {useState, useEffect}from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import {useGetCryptosQuery} from '../services/cryptoApi';


function Cryptocurrencies({simplified}) {

  const count = simplified ? 10 :100;

  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  // console.log(cryptosList)
 
  const [searchTerm, setSearchTerm] = useState('');



  useEffect( ()=> {
    setCryptos(cryptosList?.data?.coins)
    const filteredData = cryptosList?.data?.coins.filter( (item) => item.name.toLowerCase().includes(searchTerm));
    setCryptos(filteredData);
  }, [cryptosList, searchTerm])

  // console.log(cryptos);
  
  if (isFetching) return 'loading...';

  return (
    <>     
      {
        !simplified && (
        <div className='search-crypto'>
          <Input 
          onChange={ (e) => setSearchTerm(e.target.value.toLowerCase())}
          placeholder="Search Crypto..."
          />
        </div>
        )
      }
      <Row gutter={[32,32]} className="crypto-card-container">
        {
          cryptos?.map( (currency) => (
            <Col xs={24} sm={12} ls={6} key={currency.uuid} className="crypto-card">
              <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                <Card 
                title={`${currency.rank}. ${currency.name}`} 
                extra={<img className='crypto-image' src={currency.iconUrl} />}
                hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {currency.change}%</p>
                </Card>
              </Link>
            </Col>
          ))
        }

      </Row>
    </>
  )
}

export default Cryptocurrencies;
  