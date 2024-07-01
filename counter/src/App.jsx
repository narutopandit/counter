import { createContext, useContext, useState } from 'react'
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
const SetCount = createContext();
function App() {
  const [count, setCount] = useState(0);
  return <SetCount.Provider value={{
    count:count,
    setCount:setCount
  }}>
    <Box variant='outlined' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
    <Card style={{display:'flex',justifyContent:'space-evenly',border:'2px solid grey',width:'300px',height:'300px',alignItems:"center"}}>
      <Increase ></Increase>
      <Count ></Count>
      <Decrease ></Decrease>
    </Card>
  </Box>
  </SetCount.Provider>
  
}

function Increase(){
  const {count,setCount} = useContext(SetCount);
 return <Button variant='contained'style={{height:'40px'}} onClick={()=>{
    setCount(count+1)
  }}>Increase</Button>
}
function Decrease(){
  const {count,setCount} = useContext(SetCount);
  return <Button variant='contained'style={{height:'40px'}} onClick={()=>{
    setCount(count-1)
  }}>Decrease</Button>
}
function Count(){
  const {count} = useContext(SetCount);
  return <h1>{count}</h1>
}
export default App
