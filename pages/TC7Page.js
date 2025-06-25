import { expect } from "@playwright/test";
export class TC7Page {
    constructor(page){
        this.page = page ; 
        this.postRequirement = page.locator('button', { hasText: 'Post a requirement' });
        this.textRequirement = page.locator('textarea[name="promptJson"]');
        this.nextButton = page.getByText('Next');
        this.anotherNextButton = page.locator('button', { hasText: 'Next' });
        this.selectClientCode = page.locator('#mui-component-select-clientCode');   // , { id: 'mui-component-select-clientCode' });
        this.selectClient = page.getByRole('option', { name: 'Delll' });
        this.searchVendor = page.locator('#placeholder');
        this.empanelledClient = page.locator('#tags-readOnly');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.table = page.locator('//table//tbody//tr');
        this.requirementsTab = page.locator('span', { hasText: 'Requirements' });
        // this.activeId = page.locator('#tags-readOnly').getAttribute('aria-activedescendant');
        this.selectVendor = page.locator('#tags-readOnly-label');
        this.activeVendor = page.locator('li', { hasText: 'DUCAT' });
    }
    
    async postRequirements(postName ){ 
        await this.postRequirement.click();
        await this.textRequirement.fill(postName);
        await this.nextButton.click();
        await this.selectClientCode.click();
        await this.selectClient.click();
        await this.anotherNextButton.click();
    }
    async selectingPerticularVendor(){
       //  await page.locator(`#${activeId}`).click(); 
        await this.selectVendor.click();
       //  await this.empanelledClient.fill('testVendor123');
        await this.submitButton.click();
        // await this.page.waitForTimeout(3000);
        console.log("Toast"); 
        const toastMessage = this.page.locator("//p[contains(text(), 'Requirement created and shared successfully')]");

        await expect(toastMessage).toBeVisible({ timeout: 5000 });

        // if(){
        //     console.log("Test Passed")
        // } else {
        //     console.log("Test Failed")
        // }
    }

    async clickingRequiementTab(){
        await this.requirementsTab.click();
    }

    async searchingPerticularRequirement(){
        await this.page.waitForTimeout(5000);
        let isFind = false ;  
        const rows = await this.table.count();
        // const rows = await tableRows.count();
        console.log(rows);
        for(let i = 1 ; i <= rows ; i++){
            if(await this.page.locator(`//table//tbody//tr[${i}]//th[2]//div[1]//div`).textContent() == 'Software Developer' 
                    && 
               await this.page.locator(`//table//tbody//tr[${i}]//th[2]//div[2]//div`).textContent() == 'TestPartner4'){
                isFind = true ; 
                continue;
            }
            else {
                break;
            }
        }
        if(isFind){
            console.log("Test Passed");
        }else {
            console.log("Test Failed");
        }
    }
}