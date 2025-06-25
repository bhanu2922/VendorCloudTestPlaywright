import {test} from "@playwright/test";
import { TC7Page } from "../../pages/TC7Page";
import { LoginPage } from "../../pages/LoginPage";
import { TC2Page } from "../../pages/TC2Page";

test('In partner login if partner post a specific requirement to vendor is not visible to vendor side. ' , 
    async ({page})=>{
    const login = new LoginPage(page); 
    const testcase7 = new TC7Page(page);
    const logout = new TC2Page(page);
    await login.goto();
    await login.login('testpartner4@yopmail.com', 'Test@1234');
    await testcase7.postRequirements();
    await testcase7.selectingPerticularVendor();
    await logout.logout();
    await login.login('testvendor12345@yopmail.com', 'Test@1234');
    await testcase7.clickingRequiementTab();
    await testcase7.searchingPerticularRequirement();
})
