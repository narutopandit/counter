import React from 'react';
import { createContext, useContext, useState } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
//first thing
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil';
 
//second thing
const countState = atom({
  key: 'countState',
  default: 0
});

function App() {
  return (
    ///third thing
    <RecoilRoot>
      <Box variant='outlined' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card style={{ display: 'flex', justifyContent: 'space-evenly', border: '2px solid grey', width: '300px', height: '300px', alignItems: "center" }}>
          <Increase />
          <Count />
          <Decrease />
        </Card>
      </Box>
    </RecoilRoot>
  );
}

function Increase() {
  //fourth thing
  const setCount = useSetRecoilState(countState);
  return (
    <Button variant='contained' style={{ height: '40px' }} onClick={() => {
      setCount((e) => e + 1);
    }}>
      Increase
    </Button>
  );
}

function Decrease() {
  //4th
  const setCount = useSetRecoilState(countState);
  return (
    <Button variant='contained' style={{ height: '40px' }} onClick={() => {
      setCount((e) => e - 1);
    }}>
      Decrease
    </Button>
  );
}

function Count() {
  //5th thing
  const count = useRecoilValue(countState);
  return <h1>{count}</h1>;
}

export default App;
