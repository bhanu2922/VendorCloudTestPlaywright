export class TC6Page {
    constructor(page){
        this.page = page ; 
        this.postRequirement = page.locator('button', { hasText: 'Post a requirement' });
        this.textRequirement = page.locator('textarea[name="promptJson"]');
        this.nextButton = page.getByText('Next');
        this.anotherNextButton = page.locator('button', { hasText: 'Next' });
        this.selectClientCode = page.locator('#mui-component-select-clientCode');   // , { id: 'mui-component-select-clientCode' });
        this.selectClient = page.getByRole('option', { name: 'Delll' });

    }

    async postRequirements(){ 
        await this.postRequirement.click();
        await this.textRequirement.fill("Post : Software Developer");
        await this.nextButton.click();
        await this.selectClientCode.click();
        await this.selectClient.click();
        await this.anotherNextButton.click();
    }
 

}