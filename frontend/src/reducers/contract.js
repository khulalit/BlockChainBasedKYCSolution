import {abi} from "../abi"
let address = '0x042e6c500265495Dea639c79Ed5fb5d84D0e36AD'

export default contractReducer = (state = 0, action)=>{
    switch(action.type){
        case "CONTRACT" :
            // state =  new web3.eth.Contract(abi,address)
            return state ;
    }
         
}