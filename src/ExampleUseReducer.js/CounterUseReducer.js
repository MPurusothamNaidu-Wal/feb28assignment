import { useReducer } from "react";
import CountReducer from "./CountReducer";

const CounterUseReducer = () => {
    const initialValue = {count:0};
    const [state,action] = useReducer(CountReducer, initialValue);
    const increase = () =>{
        action({type: "increase"});
    }
    return(
        <div>
            Count = {state.count} <br />
            <button onClick={increase}>increase</button>
            <button 
            onClick={() => {
                action({type: "decrease"})
            }} >decrease</button>
        </div>
    )
}
export default CounterUseReducer;