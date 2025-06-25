import { LoginPage } from "./LoginPage";
export class TC5Page {
    constructor(page){
        this.page = page; 
    }
    
    async multipleLogins(){
        const login = new LoginPage(this.page);
        for( let i = 1 ; i <= 5 ; i++){
            await login.login('testpartner4@yopmail.com', 'Test1234');
        }
        console.log("Multiples logins failed but no Waring appears");
    }
}