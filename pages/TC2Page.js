export class TC2Page {
    constructor(page){
        this.page = page ; 
        this.vendor = page.locator('span', { hasText: 'Vendors' });        
        this.search = page.getByText('Search');
        this.company = page.locator("//p[text()='testVendor123']");
        this.invite = page.getByRole('button', { name: 'Invite for Empanelment' });
        this.textArea = page.locator('textarea[rows="3"][required]');
        this.inviteButton = page.getByRole('button', { name: 'Invite' });
        this.notification = page.locator('svg.my-auto');
        this.logoutText = page.getByText('Logout');
    }
    async sendInvite(){
        await this.vendor.click();
        await this.search.click();
        await this.page.waitForTimeout(2000);
        await this.company.click();
        await this.invite.click(); 
        await this.page.waitForTimeout(2000);
        await this.textArea.fill("Accept My invite");
        await this.inviteButton.click();
    }

    async logout(){
        await this.logoutText.click();
        await this.page.waitForTimeout(2000);
    }

    async checkForNotification(){
        await this.page.waitForTimeout(2000);
        await this.notification.click(); 
    }
}