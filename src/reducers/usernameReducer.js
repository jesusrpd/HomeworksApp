import Cookie from 'universal-cookie';

const usernameReducer = (state = '', action)=>{
    switch (action.type) {
        case "INITIAL":
            const cookies = new Cookie();
            const user = cookies.get('user');
            return user;
        default:
            return state;
    }
};

export const getUsername = ()=>{
    return {
        type: 'INITIAL'
    }
};

export default usernameReducer;