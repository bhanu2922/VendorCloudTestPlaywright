import {test} from "@playwright/test";
import { TC8Page } from "../../pages/TC8Page";
import {LoginPage} from "../../pages/LoginPage"
import { TC7Page } from "../../pages/TC7Page";

test('In Partner when we go to the requirement section , where we want to filter the client basis on the name , but it is not filtering it is showing all the client ', async ({page})=>{
    const login = new LoginPage(page);
    const testcase8 = new TC7Page(page);
    const testCases8 = new TC8Page(page);


    await login.goto();
    await login.login('testpartner4@yopmail.com', 'Test@1234');
    await testcase8.clickingRequiementTab();
    await testCases8.clickingOnClient();
    await testCases8.checkOutcomeClients();
});
