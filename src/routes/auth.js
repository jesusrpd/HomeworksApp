import Cookie from 'universal-cookie';

class Auth{
    constructor(){
        const cookies = new Cookie();
        if (cookies.get('auth')) {
            this.authenticated = true;
        }else{
            this.authenticated = false;
        }
    };

    login(cb){
        const cookies = new Cookie();
        if (cookies.get('auth')) {
            this.authenticated = true;
        }
        cb();
    };

    logout(cb){
        this.authenticated = false;
        cb();
    };

    isAuthenticated(){
        return this.authenticated;
    };
};

export default new Auth();