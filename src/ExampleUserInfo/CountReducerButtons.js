import CountReducerContext from "./CountReducerContext";
import { useContext } from "react";

const CountReducerButtons = () =>{
    const {dispatch} = useContext(CountReducerContext);

    return(
        <div>
            <button
            onClick={() => {
                dispatch({type: "increase"});
            } } >
                increase
            </button>
            <button
            onClick={() => {
                dispatch({type: "decrease"});
            } } >
                decrease
            </button>
        
        </div>
    )
}
export default CountReducerButtons;