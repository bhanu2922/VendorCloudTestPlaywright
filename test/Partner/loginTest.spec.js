import {test , expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

// login test 
test('Login to Vendors Cloud', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('testpartner4@yopmail.com', 'Bhanu@12345');
});



