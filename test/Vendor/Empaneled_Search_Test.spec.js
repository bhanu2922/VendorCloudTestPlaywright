import {test} from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage";
import { TC11Page } from "../../pages/TC11Page";
test('In vendor side when we click on partners and then click on empaneled the search bar is not working in active partners section' , async ({page})=>{

    const login = new LoginPage(page);
    const testcase11 = new TC11Page(page);
    await login.goto();
    await login.login('testvendor12345@yopmail.com', 'Test@1234');
    await testcase11.searchingPartner();


})