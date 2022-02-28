import {useContext} from "react";
import UserObContext from "../UserObContext";

const UserProfessionalInfo = () =>{
    const userOb = useContext(UserObContext);
    return(
        <div><h1>Professional Info</h1>
            <div>Professional Info Company: {userOb.professional.company}</div>
            <div>Professional Info Designation: {userOb.professional.designation}</div>
        </div>
    )
}
export default UserProfessionalInfo;