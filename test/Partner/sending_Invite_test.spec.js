import {test , expect } from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage"
import { TC2Page } from "../../pages/TC2Page";

test('Sending Empaneled Request to the vendor ', async ({page})=>{
    const login = new LoginPage(page);
    const testCase2 = new TC2Page(page);
    await login.goto();
    await login.login('testpartner4@yopmail.com', 'Test@1234');
    await testCase2.sendInvite();
    await testCase2.logout();
    await login.login('testvendor123@yopmail.com', 'Test@1234');
    await testCase2.checkForNotification();
    
})