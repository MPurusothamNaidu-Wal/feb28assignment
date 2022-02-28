const HobbiesReducer = (state, action) => {
    if (action.type === 'add') {
                let newHobby = document.getElementById("inputfield").value;
                return { Hobby: [...state.Hobby, newHobby] }
        }
    if (action.type === "clear") {
        return { Hobby: [] }
    }
    if(action.type == "delete" ) {
        let newHobbies = [];
        [...state.Hobby].filter((val,index) => {
            if(action.toRemove != val) {
                newHobbies.push(val);
            }
        });
        return{ Hobby: newHobbies};
    }
}
export default HobbiesReducer;