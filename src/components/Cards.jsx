import React from 'react'
import '../App.css'
import { FaStar ,FaEye} from "react-icons/fa";
import { Button, Card, Col, Flex, Row, Typography } from 'antd';


const Cards = ({item,key}) => {
   
  return (
     <div className='Todo' key={key}>
       
  <Row  >
    <Col span={6}>
    <figure className='card_fig1'><img className='card_avatar' src={item?.owner?.avatar_url} alt={item?.name} /></figure>   
    </Col>
    <Col span={14}><h1 className='col_h1'>{item?.full_name}</h1>
    </Col>
    <Col span={4} />
   
  </Row>
  <Row className='row_style' >
    <Col span={24}><p>{item?.description ? item?.description: 'Description Empty' }</p></Col>
  </Row>
  <Row className='row_style'>
    
    <Col span={6}><figure className='card_fig'><FaStar /><figcaption>{item?.stargazers_count}</figcaption></figure>
    </Col>
    <Col span={6}><figure className='card_fig'><FaEye /><figcaption>{item?.watchers} </figcaption></figure>
    </Col>
    <Col span={4} />
    <Col span={8}><p style={{whiteSpace:'nowrap'}}>{item?.language}</p></Col>
  </Row>
    

 
  </div>
  )
}

export default Cards