export class TC12Page {
    constructor(page){
        this.page = page ; 
        this.profile = page.locator('div[role="button"]', {hasText: 'Vendor  test',});
        this.name = page.locator('input[name="firstName"]');
        this.phone = page.locator('input[name="phone"]');
        this.submit =  page.getByRole('button', { name: 'Submit' })
    }

    async updateProfile (){
        await this.page.waitForTimeout(4000);
        await this.profile.click();
        await this.name.fill("Partner22");
        await this.phone.fill('8877665544');
        await this.page.waitForTimeout(4000);
        await this.submit.click();
    }
}