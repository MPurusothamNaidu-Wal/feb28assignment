import { useReducer } from "react";
import CountReducer from "../ExampleUseReducer.js/CountReducer";
import CountReducerContext from "./CountReducerContext"
import ShowCount from "./ShowCount";
import CountReducerButtons from "./CountReducerButtons";
const CountUserReducer = () =>{
    const initialValue = { count: 0};
    const [state, dispatch] = useReducer(CountReducer, initialValue);
    console.log(state);
    const reducerValue = {state, dispatch};
    return(
        <div>
            <CountReducerContext.Provider alue={reducerValue}>
                <ShowCount />
                <CountReducerButtons></CountReducerButtons>
            </CountReducerContext.Provider>
        </div>
    )
}
export default CountUserReducer;