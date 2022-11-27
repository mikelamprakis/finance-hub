import React , {useState} from 'react';
import {Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment'

import {useGetCryptosQuery} from '../services/cryptoApi';
import {useGetCryptoNewsQuery} from '../services/cryptoNewsApi';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

function News({simplified}) {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
  // console.log(cryptoNews);

  if (isFetching) return 'loading...';
  

  return (
   <Row gutter={[24,24]}>
    { !simplified && (
      <Col span={24}>
        <Select 
        className='select-news'

        optionFilterProp="children"
        filterOption={(input, option) => 
          option.children.toLowerCase().indexOf(input.toLowerCase()) >=0}

        showSearch
        placeholder="Select a Crypto"
        onChange={(value) => setNewsCategory(value)}  
        >

          {data?.data?.coins?.map( (currency) => <Option value={currency.name}>{currency.name}</Option>)}

        </Select>
      </Col>
    )}

    {cryptoNews.value.map( (news, i) => (
      <Col xs={24} sm={12} lg={8} key={i}>
        <a href={news.url} target='_blank' rel='noreferrer'>

          <div className='news-image-container'>
             <Title level={4} className='news-title'>{news.name}</Title>
             <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
          </div>
          
          <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
         
          <div className='provider-container'>
            <div>
              <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
              <Text className="provider-name">{news.provider[0]?.name}</Text>
            </div>
            <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
          </div>    

        </a>
      </Col>
    ))
    }

   </Row>
  )
}

export default News
 