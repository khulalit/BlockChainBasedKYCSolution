import Header from "../components/Header";
import Stats from "../components/Stats";
import List from '../components/List'
import Add from "../components/Add";
import SearchBar from "../components/SearchBar";
import React from 'react';
import { useSelector } from 'react-redux';

export default function Dashboard({setconnected,currAddress,contracts}) {
    const open = useSelector(state => state.open);
    const FI = ['fi','Registered Cases','Approved Cases', 'Rejected Cases']
    const admin = ['admin','Total Institutions','Active Institution', 'Inactive Instition']
    const user = ['user','Registered Cases','Approved Cases', 'Rejected Cases']
  return (
    <div >
        <Header where={"dashboard"} setconnected={setconnected} currAddress={currAddress} />
        {console.log(open)}
        {open?<Add contracts={contracts} />:
        <div className="flex w-screen justify-between gap-2">
            <div className="w-1/5 ">
                <Stats props={FI}/>
            </div>
            <div className=" w-4/5 ">
                <div className="w-2/4 p-2 ">
                    <SearchBar/>
                </div>
                <h1 className="text-2xl text-bold p-4">All Financial Institutions </h1>
                <List/>
                <List/>
                <List/>
                <List/>
            </div>
        </div>}
    </div>
  )
}
