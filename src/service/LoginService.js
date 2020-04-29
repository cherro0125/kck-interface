class LoginService {
    constructor(){
        this.isLogged = false;
    }

    getIsLogged(){
        return this.isLogged;
    }

    setIsLogged(state){
        this.isLogged = state;
    }
}

let loginService = new LoginService();

export default loginService;

