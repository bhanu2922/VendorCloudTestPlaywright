import { expect } from "allure-playwright";
export class updatingProfile {
    constructor(page){
        this.page = page ; 
        this.profile = page.locator("//a//div//p[2]");
    }
    async updateProfile(){
        await this.page.waitForTimeout(3000);
        await this.profile.click();
        const lastNameLocator = await this.page.locator('input[name="lastName"]');
        await expect(lastNameLocator).toHaveValue('Vendor');
    }
}