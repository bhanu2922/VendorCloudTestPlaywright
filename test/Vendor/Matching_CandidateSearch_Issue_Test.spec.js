import {test} from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage";
import { TC10Page } from "../../pages/TC10Page";


test('In vendor side when we go to the requirement section and click on matching candidate the search bar is not working' , async ({page})=>{

    const login = new LoginPage(page);
    const testcase10 = new TC10Page(page);
    await login.goto();
    await login.login('testvendor12345@yopmail.com', 'Test@1234');
    await testcase10.checkingInRequirementSection('Software Developer')

})