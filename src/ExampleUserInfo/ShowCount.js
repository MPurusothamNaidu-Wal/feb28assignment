import CountReducerContext from "./CountReducerContext";
import { useContext } from "react";
const ShowCount = () => {
    const reducerVal = useContext(CountReducerContext);
    return <div>Count = {reducerVal.state.count} </div>
}
export default ShowCount;