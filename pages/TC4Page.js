export class TC4Page {
    constructor(page){
        this.page = page ; 

    }
    async fillSignupForm() {
        await this.page.locator('text=Sign Up').click();
        await this.page.locator('[name="firstName"]').fill("Testing");
        await this.page.locator('[name="lastName"]').fill("vendor");
        await this.page.locator('[name="companyName"]').fill("Testing Company");
        await this.page.locator('[name="email"]').fill("testingvendor2345@yopmail.com");
        await this.page.locator('[name="password"]').fill("Test");
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.waitForTimeout(5000);
        await this.page.locator("//*[name()='svg'])[2]");
    }
}