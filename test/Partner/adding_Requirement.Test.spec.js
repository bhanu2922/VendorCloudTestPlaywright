import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { TC7Page } from "../../pages/TC7Page"

test('Adding Requirement' , async ({page})=>{
    const login = new LoginPage(page);
    const addingClient = new TC7Page(page);
    await login.goto();
    await login.login('testpartner4@yopmail.com','Test@1234');
    await addingClient.clickingRequiementTab();
    await addingClient.postRequirements("C++ Developer");
    await addingClient.selectingPerticularVendor();
})