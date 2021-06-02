import homeworksServices from "../services/homeworks";

const homeworksReducer = (state = [], action) => {
    switch (action.type) {
        case "NEW_HOMEWORK":
            return [...state, action.data];
        case "INIT_HOMEWORKS":
            return action.data;
        case "DELETE":
            return action.data;
        default:
            return state;
    }
};

export const getHomeworks = () => {
    return async dispatch =>{
        const homeworks = await homeworksServices.getHomeworks();
        dispatch({
            type: "INIT_HOMEWORKS",
            data: homeworks
        });
    };
};


export const createHomework = h => {
    return async dispatch =>{
        const newHomework = await homeworksServices.addHomework(h);
        dispatch({
            type: "NEW_HOMEWORK",
            data: newHomework
        });
    };
};

export const deleteHomework = (id)=>{
    return async dispatch =>{
        const homeworks = await homeworksServices.deleteHomework(id);
        dispatch({
            type: "DELETE",
            data: homeworks
        })
    };
};

export default homeworksReducer;
