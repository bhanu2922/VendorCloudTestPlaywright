export class TC10Page {
    constructor(page){
        this.page = page ; 
        this.requirementOption = page.getByRole('link', { name: 'Requirements' });
        this.searchBar = page.locator('//input[@placeholder="Search"]');
    }

    async checkingInRequirementSection(searchedtext){
        
        await this.requirementOption.click();
        await this.page.waitForTimeout(3000);
        await this.searchBar.fill(`${searchedtext}`);
        await this.page.waitForTimeout(3000);
        await this.page.locator('.add-right-shadow > div > div').first().click();

    }
}