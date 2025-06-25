export class TC13Page {
    constructor(page){
        this.page = page ; 
        this.vendor = page.locator('span', { hasText: 'Vendors' });        
        this.search = page.getByText('Search');
        this.company = page.locator("//p[text()='Vendor 10']");
        this.invite = page.getByRole('button', { name: 'Invite for Empanelment' });
        this.textArea = page.locator('textarea[rows="3"][required]');
        this.inviteButton = page.getByRole('button', { name: 'Invite' });
        this.notification = page.locator('svg.my-auto');
        
    }
    async sendInvite(){
        await this.vendor.click();
        await this.search.click();
        await this.page.waitForTimeout(2000);
        await this.company.click();
        await this.invite.click(); 
        await this.page.waitForTimeout(2000);
        await this.textArea.fill("   ");
        await this.inviteButton.click();
        await this.page.waitForTimeout(3000);
    }
}