import React, { useEffect, useState } from 'react'
import '../App.css'
import { FaSearch } from "react-icons/fa";
import {Row,Col, Select} from 'antd'
const Search = ({query,handleQuery,selectedValue,handleSelect}) => {
    const [note,setNote] = useState('')
  const handleChange = (e)=>{
    let value = e.target.value 
    handleQuery(value)
  }
  const optionsValues = [{name : 'Stars',value:"stargazers_count"}, {name : 'Name',value:"name"},
  {name : 'Watchers count',value:"watchers_count"},{name : 'Score',value:"score"},
  {name : 'created At',value:"created_at"},{name :'Updated At',value:"updated_at"}]
  
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <form className='TodoForm'>
    <Row style={{gap:'2rem'}}>
        <Col span={16}>
        <input placeholder='Search github repos' type='text' value={query} onChange={handleChange} className='todo-input' />
    <button type='submit' onClick={handleSubmit} className='todo-btn'> <FaSearch  /></button>
    
        </Col>
        <Col span={5} style={{marginTop:'-0.4rem'}}>
        <label style={{color:'#fff'}}>Sort By :</label>
    <select className='search_select' value={selectedValue} onChange={(e)=>handleSelect(e.target.value)}>
        {optionsValues.map((item)=>(
            <option value={item.value}>{item.name}</option>
        ))}
        </select>    
        </Col>
    </Row>
    
   
    </form>
  )
}

export default Search