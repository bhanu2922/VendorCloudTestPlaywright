export class DashboardPage{
    constructor(page){
        this.page = page ; 
        this.dashboard = page.locator('span', { hasText: 'Dashboard' });
       // this.openPositions = page.locator('h5', { hasText: '29' });
        this.totalRequirementsPlaced = page.locator('//div//p//span[3]');
        this.cardHeading = page.locator("//p[@class='text-base' and text()='Open Positions']/ancestor::div[1]//h5");
    }

    async checking(){
        // //p[@class="text-base" and text()= 'Open Positions']//parent::div/h5
        await this.page.waitForTimeout(3000);
        await this.dashboard.click();
        //const cardHeading = await this.page.locator("//p[@class='text-base' and text()='Open Positions']/ancestor::div[1]//h5");
        const cardValue = await this.cardHeading.textContent();
        await this.cardHeading.click();
        await this.page.waitForTimeout(3000);
        let rows = await this.totalRequirementsPlaced.textContent();
        console.log(rows);
        let totalOpenPositions = 0  ;
        let j = 1 ; 
        for( let i = 1 ; i <= rows ; i++){
        
           const quantity =  await this.page.locator(`//table//tbody//tr[${j}]//td[3]//span`).textContent();
           // console.log(quantity)
           totalOpenPositions += parseInt(quantity.split("\\s")[0]);
           if( j % 15 == 0 ){
                await this.page.locator('//button[2]').click();
                j = 0;
                await this.page.waitForTimeout(3000);
           }
           j++;
        }
        console.log(totalOpenPositions);
        console.log(cardValue);
 
        if (cardValue == totalOpenPositions) {
          console.log("Test passed");
        } else {
          console.log("Test failed");
        }
    }
}