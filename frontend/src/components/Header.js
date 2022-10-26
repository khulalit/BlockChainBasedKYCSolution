import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'
import Web3 from "web3";
import { useState } from 'react'
import { useDispatch , useSelector} from "react-redux";
import { connectToMask } from "../actions";

export default function Header({where, setconnected,currAddress}) {
  const [address,setaddress] = useState('');
  async function handleConnect() {
    if(address>0){
      setconnected(false)
      setaddress('');
    }else{
      await window.ethereum.request({ method: "eth_requestAccounts" });
      window.web3 = new Web3(window.ethereum);
      const account = window.web3.eth.accounts;
      //Get the current MetaMask selected/active wallet
      const walletAddress = account.givenProvider.selectedAddress;
      setconnected(true);
      setaddress(walletAddress);
      console.log(`Wallet: ${walletAddress}`);
      currAddress(walletAddress)
    }
  }
  return (
    <div className='flex justify-between p-6 border-b-2 border-primary sticky-top' style={{position:"sticky", top : 0 }}>
        <div className='logo'><img className="shadow-lg hover:skew-y-1 cursor-pointer" width="100px" height="50px" src={logo}></img></div>
        <div className='flex justify-around w-2/4 p-3'>
            <div className='px-2 py-1'>{where !== 'dashboard'? <Link to='/dashboard/admin' className='hover:underline text-1xl text-primary'>DashBoad</Link>: <Link to='/' className='hover:underline text-1xl text-primary'>Home</Link>}</div>
            <div className='px-2 py-1'><Link to='/contact-us' className='hover:underline text-primary'>Contact Us</Link></div>
            <div><button className='border text-primary border-primary px-4 py-1 hover:bg-primary hover:text-white rounded' onClick={handleConnect} title={address.length>0?address:""}>{address.length>0?address.substring(0,6)+"....."+address.substring(address.length -8):'Connect'}</button></div>
        </div>
        
    </div>
  )
}

