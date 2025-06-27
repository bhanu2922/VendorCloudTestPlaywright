import {test} from "@playwright/test"
import {LoginPage} from "../../pages/LoginPage"
import { TC3Page } from "../../pages/TC3Page";

test('When I am adding a client with a status active and when I filter out the client on the basis of status , it is showing active member ', async ({page})=>{
    const login = new LoginPage(page);
    const testCase3 = new TC3Page(page);

    await login.goto();
    await login.login('testpartner4@yopmail.com', 'Test@1234');
    await testCase3.addClient('SoftSolutions' , '8877665599'); 
    await testCase3.filteringClient();

}) 