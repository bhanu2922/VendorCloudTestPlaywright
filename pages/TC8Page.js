export class TC8Page {
    constructor(page){
        this.page = page; 
        this.clientButton = page.getByRole('button', { name: 'Client', exact: true });
        this.option = page.getByText('Delll', { exact: true });
        this.table = page.locator('//table//tbody//tr');

    }

    async clickingOnClient(){
        await this.clientButton.click();
        await this.option.click();
        await this.page.waitForTimeout(5000);
    }

    async checkOutcomeClients(){
        let isFind = false ;  
        const rows = await this.table.count();
        // const rows = await tableRows.count();
        console.log(rows);
        //table//tbody//tr[2]//th//div[2]//div[1]//span

        for(let i = 2 ; i <= rows ; i++){
            if(await this.page.locator(`//table//tbody//tr[${i}]//th//div[2]//div[1]//span[text()="Delll"]`).textContent() == 'Delll'){
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