import {useContext} from "react";
import UserObContext from "../UserObContext";
const Username = () =>{
    const userOb = useContext(UserObContext);
    return(
        <div>
            <h1>{userOb.personal.name}</h1>
        </div>
    )
}
export default Username;