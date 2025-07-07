import {test , expect } from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage"
import { TC6Page } from "../../pages/TC6Page";

test('The Select Client dropdown fails to function when a partner post a requirement.(when no client is added)' , async ({page})=>{
    const login = new LoginPage(page); 
    const testcase6 = new TC6Page(page);
    await login.goto();
    await login.login('testpartner4@yopmail.com', 'Test@1234');
    await testcase6.postRequirements();
    
})
