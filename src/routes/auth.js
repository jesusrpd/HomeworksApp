class Auth{
    constructor(){
        const auth = true;
        if(auth){
            this.authenticated = true;
        }else{
            this.authenticated = false;
        };
    };

    lolgin(cb){
        if(auth){
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