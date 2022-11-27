import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Col, Row, Typography, Select } from 'antd';
import {useGetStockDetailsQuery} from '../services/stockDetailsApi'
const { Title, Text } = Typography;
function StockDetails() {
  const { stockId } = useParams();

  const [countryCode, setCountryCode] = useState('')
  const [symbol, setSymbol] = useState('')

  useEffect( ()=>{
    setCountryCode(stockId.split('-')[0]);
    setSymbol(stockId.split('-')[1]);
  },[])

  const {data: stockDetails, isFetching} = useGetStockDetailsQuery(symbol, countryCode)
  if (isFetching) return 'loading...';

  console.log(stockDetails)

  
  return (
    <div>
      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">{stockDetails?.quoteType?.longName} Value Statistics</Title><br/>
            <Text>SYMBOL : {stockDetails?.quoteType?.symbol}</Text><br/>
            <Text>BID : {stockDetails?.summaryDetail?.bid?.raw}</Text><br/>
            <Text>MARKET CAP : {stockDetails?.summaryDetail?.marketCap?.fmt}</Text><br/>
            <br/>

            <Text>EXCHANGE : {stockDetails?.quoteType?.exchange}</Text><br/>
            <Text>TIME ZONE : {stockDetails?.quoteType?.exchangeTimezoneName}</Text><br/>
            <Text>MARKET : {stockDetails?.quoteType?.market}</Text><br/>
            <Text>CURRENCY : {stockDetails?.summaryDetail?.currency}</Text><br/>
            <Text>EMPLOYEES : {stockDetails?.summaryProfile?.fullTimeEmployees}</Text><br/>
            <Text>INDUSTRY : {stockDetails?.summaryProfile?.industry}</Text><br/>
            <Text>SECTOR : {stockDetails?.summaryProfile?.sector}</Text><br/>
            <br/>

            <Text>PHONE : {stockDetails?.summaryProfile?.phone}</Text><br/>
            <Text>WEBSITE : {stockDetails?.summaryProfile?.website}</Text><br/>
            <br/>

            <Text>ADDRESS : {stockDetails?.summaryProfile?.address1}</Text><br/>
            <Text>CITY : {stockDetails?.summaryProfile?.city}</Text><br/>
            <Text>STATE : {stockDetails?.summaryProfile?.state}</Text><br/>
            <Text>COUNTRY : {stockDetails?.summaryProfile?.country}</Text><br/>
            <Text>ZIPCODE : {stockDetails?.summaryProfile?.zip}</Text><br/>
            <br/>

            <hr/>
            <h3>SUMMARY</h3>
            <Text>{stockDetails?.summaryProfile?.longBusinessSummary}</Text><br/>
           


          </Col>
        </Col>
      </Col>
    </div>
  )
}



export default StockDetails
