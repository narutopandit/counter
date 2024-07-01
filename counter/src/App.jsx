import { useState } from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  return <Box variant='outlined' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
    <Card style={{display:'flex',justifyContent:'space-evenly',border:'2px solid grey',width:'300px',height:'300px',alignItems:"center"}}>
      <Increase count={count} setCount={setCount}></Increase>
      <Count count={count} setCount={setCount}></Count>
      <Decrease count={count} setCount={setCount}></Decrease>
    </Card>
  </Box>
}

function Increase({count,setCount}){
 return <Button variant='contained'style={{height:'40px'}} onClick={()=>{
    setCount(count+1)
  }}>Increase</Button>
}
function Decrease({count,setCount}){
  return <Button variant='contained'style={{height:'40px'}} onClick={()=>{
    setCount(count-1)
  }}>Decrease</Button>
}
function Count({count,setCount}){
  return <h1>{count}</h1>
}
export default App
