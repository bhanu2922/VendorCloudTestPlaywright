import {test} from "@playwright/test"
import {LoginPage} from "../../pages/LoginPage";
import { updatingProfile } from "../../pages/updatingProfile";

test('Updating Profile' , async ({page})=>{
    const login = new LoginPage(page);
    const updating = new updatingProfile(page);

    await login.goto();
    await login.login("testvendor12345@yopmail.com" , "Test@1234"); 
    await updating.updateProfile();
}) 