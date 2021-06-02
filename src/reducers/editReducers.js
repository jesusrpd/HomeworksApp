const initialState = {
    add: false,
    error: false,
    loading: true,
    edit: false,
    modal: false,
    user: false,
};

const editReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, add: true };
        case "NOTADD":
            return { ...state, add: false };
        case "MODAL":
            return { ...state, modal: true };
        case "NOTMODAL":
            return { ...state, modal: false };
        case "LOADING":
            return { ...state, loading: true };
        case "NOTLOADING":
            return { ...state, loading: false };
        case "USER":
            return { ...state, user: true };
        case "NOTUSER":
            return { ...state, user: false };
        case "ERROR":
            return { ...state, error: true };
        case "NOTERROR":
            return { ...state, error: false };
        case "EDIT":
            return { ...state, edit: true };
        case "NOTEDIT":
            return { ...state, edit: false };
        default:
            return state;
    }
};

export const handleEdit = (t) => {
    return {
        type: t,
    };
};

export default editReducer;
