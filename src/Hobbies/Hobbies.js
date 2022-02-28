import React, { useReducer } from "react";

import HobbiesReducer from "./HobbiesReducer";
const Hobbies = () => {
    const initialValue = { Hobby: ["Initial Hobby 1", "Initial Hobby 2"] };
    
    const [state, dispatch] = useReducer(HobbiesReducer, initialValue);
    const deletethis = (indexToDlt) => {
        const newHobby = state.Hobby.filter(function (val, index) {
            if (indexToDlt == index) {
                return false
            }
            else {
                return true
            }
        })
        state.Hobby = newHobby;
        {
            state.Hobby.map((val, index) => {
                return (
                    <tr key={index}>
                        <td className="hobbyMap">{index + 1} {val}</td>


                        <td>
                            <button onClick={() => {deletethis(index)}}>Delete</button>
                        </td>
                    </tr>

                )
            })
        }
    }
    function handleSubmit(event){
        event.preventDefault();
    }
    return (
        <div className="Hobby">
            <form onSubmit={handleSubmit}>
            <input className="input" type="text" id="inputfield" required />
            <br />
            </form>
            <button className="Hbut" onClick={() => {
                dispatch({ type: "add" })
            }}>Add Hobby</button>
            <button className="Hbut" onClick={() => {
                dispatch({ type: "clear" })
            }} >Clear All Hobbies</button>

            <div className="hobbies">
                {
                    state.Hobby.map((val, index) => {
                        return (
                            <tr key={index}>
                                <td className="hobb">{index + 1} {val}</td>


                                <td>
                                   <button onClick={() => {
                                        dispatch({
                                            type: "delete",
                                            toRemove: val,
                                        })
                                    }}>Delete</button>
                                </td>
                            </tr>

                        )
                    })
                }
            </div>
            
        </div>

    )
}
export default Hobbies