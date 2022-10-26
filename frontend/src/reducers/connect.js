import Web3 from "web3";

const connectReducer = async (state = false,action)=>{
    // state = window.ethereum.request({method: "eth_requestAccounts"})
    switch (action.type) {
        case 'CONNECT':
            
        default:
            return state;
           
    }
}
export default connectReducer