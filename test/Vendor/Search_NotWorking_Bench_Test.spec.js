import {test} from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { TC9Page } from "../../pages/TC9Page";

test('In vendor side when we go to the bench section and click on matching positions the search bar is not working.' , async ({page})=>{
    const login = new  LoginPage(page);
    const testcase9 = new TC9Page(page);
    await login.goto();
    await login.login('testvendor12345@yopmail.com', 'Test@1234');
    await testcase9.checkingMatchingPositions();
})