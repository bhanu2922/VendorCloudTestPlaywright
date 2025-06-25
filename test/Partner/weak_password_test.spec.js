import {test} from "@playwright/test"
import {LoginPage} from "../../pages/LoginPage"
import { TC4Page } from "../../pages/TC4Page";

test('System fails to alert users when creating a weak (numeric-only) password', async ({page})=>{
    const login = new LoginPage(page);
    const testCase4 = new TC4Page(page);

    await login.goto();
    await testCase4.fillSignupForm();
    
})