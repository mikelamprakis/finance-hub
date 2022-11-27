
import React, {useState, useEffect} from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Collapse, Row, Col, Typography, Select, Table , Card} from 'antd';
import HTMLReactParser from 'html-react-parser';
import {useRetrieveStocksForGivenCountryQuery} from '../services/stocksApi';
const { Text } = Typography;
const { Panel } = Collapse;
const { Option } = Select;


const countries= ['GB', 'US', 'DE', 'FR', 'SG', 'HK', 'IT', 'CA', 'AU']
// US|BR|AU|CA|FR|DE|HK|IN|IT|ES|GB|SG


function Stocks() {

  const [selectedCountryCode, setSelectedCountry ] = useState('US');
  const {data :stocks, isFetching} = useRetrieveStocksForGivenCountryQuery(selectedCountryCode);

  if (isFetching) return 'loading...';
  return (
  <div>
    
      <Col span={24}>

        <Select 
         optionFilterProp="children"
         filterOption={(input, option) => option.children.indexOf(input) >=0}
         showSearch
         placeholder="Select Market"  
         onChange={(value) => setSelectedCountry(value)}
         >
          {countries?.map((country) => <Option value={country}>{country}</Option>)}
         </Select>
      </Col>

      {/* {
        stockData.map((stockSet) => (
          <Table dataSource={stockSet} columns={columns} />
        ))
      } */}

    {/* <Table dataSource={stockData} columns={columns} />; */}


    <Row gutter={[5,5]}  className="stocks">
    {
      stocks?.data?.map( (stock, i ) => (
        <Col xs={24} sm={12} lg={8} key={`${selectedCountryCode}-${stock.symbol}`} style={{color:'white', textAlign: 'left', border: '0.5px white solid'}}>
          <Link key={`${selectedCountryCode}-${stock.symbol}`} to={`/stocks/${selectedCountryCode}-${stock.symbol}`}>
            <Card>
              <Text>{stock.full_name}</Text> <br/>
              <Text>{stock.symbol}</Text> <br/>
            </Card>
          </Link>
        </Col>
      ))
    }
    </Row> 

    </div>


  )
}
      // country:"united kingdom"
// currency:"GBP"
// full_name:"InterContinental Hotels Group PLC"
// isin:"GB00BHJYC057"
// name:"InterContinental"
// symbol:"IHG"
export default Stocks
 