import {test , expect } from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage"
import { TC5Page } from "../../pages/TC5Page";


test('System fails to warn or block users after multiple failed login attempts(Security Risk) ', async ({page})=>{
    const login = new LoginPage(page);
    const testCase5 = new TC5Page(page);
    await login.goto();
    await testCase5.multipleLogins(); 
})