import {test} from "@playwright/test"
import {LoginPage} from "../../pages/LoginPage";
import { TC13Page } from "../../pages/TC13Page";


test('As a partner when we are sending an invite for Empanelment then a writebox where it is saying that partner should write some message to vendor but when I pressing spacebar , it consisder it as an alphabet.' , async ({page})=>{
    const login = new LoginPage(page);
    const testCase13 = new TC13Page(page);

    await login.goto();
    await login.login('testpartner4@yopmail.com', 'Test@1234');
    await testCase13.sendInvite();
})