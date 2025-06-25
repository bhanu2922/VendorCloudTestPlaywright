export class TC9Page {
    constructor(page){
        this.page = page;  
        this.clickBench = page.getByText('Bench');
        this.clickMatchingPosition = page.locator('//table//tbody//tr[1]//th[2]//div//div//div[1]//div[2]');
        this.search = page.getByPlaceholder('Search');
        this.searchText = page.getByText('Automation Tester');
    }

    ////table//tbody//tr[1]//th[2]//div//div//div[1]//div[2]


    async checkingMatchingPositions(){
        await this.page.waitForTimeout(3000);
        await this.clickBench.click();
        await this.page.waitForTimeout(3000);
        await this.clickMatchingPosition.click();
        await this.search.nth(1).fill('Automation Tester');
        await this.page.waitForTimeout(3000);
        let isTrue = false ; 
        if(await this.searchText.textContent() == 'Automation Tester'){
                isTrue = true ; 
                console.log("Test Case Passed");
        }else {
             console.log("Test Case Failed");
        }

    }
}