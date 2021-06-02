const newHomeworkReducer = (state = "", action)=>{
    switch (action.type) {
        case "RESET":
            return state = "";
        case "NEW":
            return action.data;
        default:
            return state;
    }
};

export const changeHomework = h =>{
    return {
        type: "NEW",
        data: h
    };
}

export const resetNewHomework = ()=>{
    return {
        type: "RESET"
    };
};

export default newHomeworkReducer;