import {test} from "@playwright/test"
import { LoginPage } from "../../pages/LoginPage"
import { DashboardPage } from "../../pages/DashboardPage";

test('Verifying total number of open position' , async ({page}) =>{
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    await login.goto();
    await login.login('testpartner4@yopmail.com', 'Test@1234');
    await dashboard.checking();

})