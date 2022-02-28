import {useContext} from "react";
import UserObContext from "../UserObContext";
import Username from "./UserName";
const UserPersonalInfo = () =>{
    const userOb = useContext(UserObContext)
    return(
        <div><h1>Personal Info</h1>
            <Username />
            <div>Personal Info phoenNo: {userOb.personal.phoneNo}</div>
        </div>
    )
}
export default UserPersonalInfo;