import "./Stats.css"
import pluSign from '../assets/plus.svg';
import { useDispatch } from "react-redux";
import { togleAddMenu } from "../actions";


export default function Stats({props}) {
    const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4 p-4 border-r-2 mt-2 border-primary  justify-around">
        <div className=" text-primary rounded-lg w-48 h-12 flex justify-evenly gap-4 items-center border-2 border-primary" >
            <div class="font-extrabold text-3xl">9</div>
            <div className=" font-bold">{props[1]}</div>
        </div>
        
        <div className="  text-primary rounded-lg w-48 h-12 flex justify-evenly gap-4 items-center border-2 border-primary" >
            <div class="font-extrabold text-3xl">9</div>
            <div className=" font-bold">{props[2]}</div>
        </div>
        <div className="  text-primary rounded-lg w-48 h-12 flex justify-evenly gap-4 items-center border-2 border-primary ">
            <div class="font-extrabold text-3xl">9</div>
            <div className=" font-bold">{props[3]}</div>
        </div>
        {props[0] !== 'user'?
        <div className=" w-48" >
            <div class="font-extrabold text-3xl w-full text-center"><button className="p-2 bg-primary rounded-full" onClick={()=>dispatch(togleAddMenu())}><img alt="button" src={pluSign} width="20px"></img></button></div>

        </div> : ''}
    </div>
  )
}
