import usernameService from "../services/user";
import Cookie from "universal-cookie";
const cookies = new Cookie();

const usernameReducer = (state = "", action) => {
    switch (action.type) {
        case "INITIAL":
            const user = cookies.get("user");
            if(user === undefined){
                return "undefine";    
            }else{
                return user;
            };
        case "NEWUSERNAME":
            return action.data;
        default:
            return state;
    }
};

export const getUsername = () => {
    return { type: "INITIAL" };
};

export const newUsername = n => {
    return async dispatch => {
        const username = await usernameService.setUser(n);
        dispatch({
            type: "NEWUSERNAME",
            data: username
        });
    };
};

export default usernameReducer;
