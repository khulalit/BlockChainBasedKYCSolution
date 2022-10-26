import React from 'react'
import Header from '../components/Header';
import Landing from '../components/Landing';
import Footer from '../components/Footer'

export default function Home({setconnected,currAddress}) {
  return (
    <div>
        <Header setconnected={setconnected} currAddress={currAddress}/>
        <Landing/>
        <Footer/>
    </div>
  )
}
