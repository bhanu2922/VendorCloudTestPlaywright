export class TC11Page {
    constructor(page){
        this.page = page ; 
        this.partner = page.getByRole('button', { name: 'Partners' });
        this.empaneled = page.getByRole('button', { name: 'Empaneled' });
        this.search = page.getByPlaceholder('Search Partners');
        this.partnerSearch = page.getByText('TestPartner4'); 

    }
    async searchingPartner(){
        await this.page.waitForTimeout(3000);
        await this.partner.click(); 
        await this.empaneled.click();
        await this.search.fill('TestPartner4');
        await this.page.waitForTimeout(3000);
        await this.partnerSearch.click();
    }
}