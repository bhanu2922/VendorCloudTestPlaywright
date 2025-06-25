import {expect} from "@playwright/test"
export class TC3Page {
    constructor(page){
        this.page = page ;
       this.clientsLabel = page.locator('span:has-text("Clients")'); 
       this.addClientButton = page.getByRole('button', { name: 'Add new client' });
       this.nameLabel = page.locator('[name="clientName"]');
       this.editor = page.locator('div.ql-editor');
       this.phoneLabel = page.locator('[name="contactPhone"]');
       this.emailLabel = page.locator('[name="contactEmail"]');
       this.addressLabel = page.locator('[name="address"]');
       this.websiteLabel = page.locator('[name="website"]');
       this.submitButton = page.getByRole('button', { name: 'Submit' });
       this.statusButton = page.getByRole('button', { name: 'Status' });
       this.activeCheckbox = page.getByRole('menuitem', { name: 'Inactive', exact: true }).getByRole('checkbox');
       this.table = page.locator('//table//tbody//tr');
    }
    async addClient (name , phoneNumber){
        await this.clientsLabel.click();
        await this.addClientButton.click();
        await this.nameLabel.fill(name);
        await this.editor.fill("Software Company");
        await this.phoneLabel.fill(phoneNumber);
        await this.emailLabel.fill("client@gmail.com");
        await this.addressLabel.fill("Sec - 63 Noida ");
        await this.websiteLabel.fill("www.org.com");
        await this.submitButton.click();
        await this.page.waitForTimeout(3000);
        this.page.on('dialog', async dialog => {
            expect(dialog.type()).toContain('Client Added Sucessfully')
        })
       
    }

    async enablingAlertHandler(){
        
    }

    async filteringClient(){
        await this.statusButton.click();
        await this.activeCheckbox.check();
        
        let isPass = 'false' ; 
        await this.page.waitForTimeout(3000);
        const tableRows = await this.table;
        const rows = await tableRows.count();
        console.log(rows);
        
        for(let i = 1 ; i <= rows ; i++){
            if(await this.page.locator(`//table//tbody//tr[${i}]//td[4]`).textContent() == 'Active'){
                isPass = 'true' ;
                continue; 
            }
            else {
                break;
            }
        }
        console.log(isPass);
    }
}
//table//tbody//tr[1]//td[4]
//table//tbody//tr