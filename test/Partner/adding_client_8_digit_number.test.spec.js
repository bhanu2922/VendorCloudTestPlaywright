import {test} from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage"
import { TC3Page } from "../../pages/TC3Page";

test('TestCase' , async ({page})=>{
    const login = new LoginPage(page);
    const addClient = new TC3Page(page);
    await login.goto();
    await login.login('testpartner4@yopmail.com', 'Test@1234');
    await addClient.addClient('HCL' , '7788990066');
})
