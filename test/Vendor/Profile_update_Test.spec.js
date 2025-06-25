import {test} from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage";
import { TC12Page } from "../../pages/TC12Page";



test('In personal information page when we update the last name,phone number and click to submit button , profile is  not update.' , async ({page})=>{

    const login = new LoginPage(page);
    const testcase12 = new TC12Page(page);
    await login.goto();
    await login.login('testvendor123@yopmail.com', 'Test@1234');
    await testcase12.updateProfile();


})