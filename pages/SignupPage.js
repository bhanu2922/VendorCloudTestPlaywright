export class signupPage {
    constructor(page){
        this.page = page ; 

    }
    async fillSignupForm() {
        await this.page.locator('[name="firstName"]').fill("Testing");
        await this.page.locator('[name="lastName"]').fill("vendor");
        await this.page.locator('[name="companyName"]').fill("Testing Company");
        await this.page.locator('[name="email"]').fill("testingvendor2345@yopmail.com");
        await this.page.locator('[name="password"]').fill("Test@1234");
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.waitForTimeout(5000);
    }

    async verifyEmail(emailUrl) {
        await this.page.goto(emailUrl);
        await this.page.locator('[name="login"]').fill("testingvendor2345@yopmail.com");
        await this.page.locator('i.material-icons-outlined.f36').click();
        const frame = await page.frame({ name: 'ifinbox' });
        await frame.locator('div.m input.mc[type="checkbox"]').check();
        await frame.locator('input.mc[type="checkbox"]').check();
        await this.page.getByRole('link', { name: 'here' }).click();
        await this.page.getByRole('button', { name: 'Verify' }).click();
        await this.page.waitForTimeout(10000);
    }

    async fillVendorDetails() {
    await this.page.locator('input[type="radio"][value="2"]').check();
    await this.page.locator('[name="portfolio"]').fill("Testing Company");
    await this.page.locator('[name="contactMail"]').fill("testingvendor234@yopmail.com");
    await this.page.locator('[name="phone"]').fill("8899776655");
    await this.page.locator('[name="website"]').fill("https://example.com");
    await this.page.locator('[name="strength"]').fill("200");

    await this.page.getByRole('button', { name: 'Next' }).click();
    await this.page.waitForTimeout(10000);

    await this.page.getByRole('button', { name: 'Try for Free' }).click();
    await this.page.getByRole('button', { name: 'Finish' }).click();
    await this.page.waitForTimeout(10000);
  }
}