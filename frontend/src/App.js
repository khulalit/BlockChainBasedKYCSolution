import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import './App.css';
import Dashboard_admin from "./pages/Dashboard_admin";
import Dashboard_fi from "./pages/Dashboard_fi";
import Dashboard_customer from "./pages/Dashboard_customer";

import Home from "./pages/Home";
import Web3 from "web3";
import {abi} from "./abi"

function App() {
  // const [contracts , setContract] = React.useState(null);
  const [isConnected, setconnected] = React.useState(false);
  const [currAddress, setCurrAddress] = React.useState('');
  let address = '0x042e6c500265495Dea639c79Ed5fb5d84D0e36AD'
  let contract = null
  if(isConnected){
    contract = new window.web3.eth.Contract(abi,address)
    // setContract(contract)
  }
  // let web3 = new Web3(window.ethereum)

  // let contract = new web3.eth.Contract(abi,address)
  // contract.getPastEvents('AllEvents',{
  //   fromBlock : 0,
  //   toBlock : 'latest'
  // },(err,events)=>{
  //   console.log(events.length)
  // })
  // console.log(contract)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home setconnected={setconnected} currAddress={setCurrAddress}/>} />
          <Route path="/dashboard" element={"dashboard"}/>
          <Route path="/dashboard/admin" element={<Dashboard_admin setconnected={setconnected} currAddress={setCurrAddress}/>} />
          <Route path="/dashboard/fi" element={<Dashboard_fi setconnected={setconnected} currAddress={setCurrAddress}/>} />
          <Route path="/dashboard/user" element={<Dashboard_customer setconnected={setconnected} currAddress={setCurrAddress}/>} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
