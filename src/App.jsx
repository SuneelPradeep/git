import { useEffect, useState } from 'react'
import './App.css'
import { Space ,Input} from 'antd'
import Search from './components/Search';
import Cards from './components/Cards';
import axios from 'axios';

function App() {
   const [query,setQuery] = useState('s')
   const [selectedValue,setSelectedValue] = useState('')
   const [data,setData] = useState([])
   const handleQuery = (v)=>{
    setQuery(v)
   }
   const handleSelect=(v)=>{
    setSelectedValue(v)
   }
  useEffect(()=>{
   const fetchData = async()=>{
    const data = await axios.get(`https://api.github.com/search/repositories?q=${query}&sort=${selectedValue}&order=desc`)
     if(data && data.status===200){
      const newdata = data?.data?.items;
     
      setData(newdata)
     }
  } 
  fetchData()
  },[query,selectedValue])
 
  
 return (
    <div className='TodoWrapper' >
      <div className='firstcolumn'>
      <Search query={query} handleQuery={handleQuery} selectedValue={selectedValue} handleSelect={handleSelect} /> </div>
     <div className='secondcolumn' >{data?.map((item,id)=> (
        <Cards item={item} key={id} />
      ))}
      </div> 
      
    </div>
  )
}

export default App
