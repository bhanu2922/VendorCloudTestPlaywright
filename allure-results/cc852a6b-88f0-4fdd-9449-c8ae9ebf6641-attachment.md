# Test info

- Name: Sending Empaneled Request to the vendor 
- Location: C:\Users\Fleek\Desktop\PlayWrightAutomationFrmework\test\Partner\sending_Invite_test.spec.js:5:1

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Search') resolved to 2 elements:
    1) <span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary !text-base css-1x7rkuw">Search</span> aka getByRole('link', { name: 'Search' })
    2) <p class="text-base mb-5">You haven't empaneled any vendors. Start by click…</p> aka getByText('You haven\'t empaneled any')

Call log:
  - waiting for getByText('Search')

    at TC2Page.sendInvite (C:\Users\Fleek\Desktop\PlayWrightAutomationFrmework\pages\TC2Page.js:15:27)
    at C:\Users\Fleek\Desktop\PlayWrightAutomationFrmework\test\Partner\sending_Invite_test.spec.js:10:5
```

# Page snapshot

```yaml
- text: Partner
- button
- button "Post a requirement"
- list:
  - button "Dashboard":
    - link "Dashboard":
      - /url: /company/dashboard
  - button "Requirements":
    - link "Requirements":
      - /url: /company/myrequirements
  - button "Applicants":
    - link "Applicants":
      - /url: /company/candidates
  - button "Clients":
    - link "Clients":
      - /url: /company/clients
  - button "Vendors"
  - list:
    - button "Empaneled":
      - link "Empaneled":
        - /url: /company/myvendors
    - button "Search":
      - link "Search":
        - /url: /company/findvendors
    - button "Onboarding":
      - link "Onboarding":
        - /url: /company/vndonboarding
- separator
- text: SETTINGS
- list:
  - button "Organization Profile":
    - link "Organization Profile":
      - /url: /company/profile
  - button "Members":
    - link "Members":
      - /url: /company/members
- list:
  - button "Test55 Partner$ testpartner4@yopmail.com":
    - link "Test55 Partner$ testpartner4@yopmail.com":
      - /url: /company/account
      - paragraph: Test55 Partner$
      - paragraph: testpartner4@yopmail.com
  - separator
  - text: Logout
- heading "28" [level=5]
- paragraph: Open Positions
- heading "0" [level=5]
- paragraph: Hot Requirements
- heading "0" [level=5]
- paragraph: Interview Scheduled
- heading "1" [level=5]
- paragraph: Candidates to review
- heading "3" [level=5]
- paragraph: No Applicants
- img: Thu 0.2 0.4 0.6 0.8 Fri Days of the Week 0 10 20 30 Positions Placements
- text: Requirements
- img: Open Closed On hold
- paragraph: Top Vendors
- paragraph: You haven't empaneled any vendors. Start by clicking 'Invite Vendors' button to search vendors to streamline your partnerships.
- button "Invite Vendors"
- paragraph: Top Clients
- paragraph: Positions
- paragraph: Infosys
- paragraph: "25"
- paragraph: Delll
- paragraph: "2"
- paragraph: HCL
- paragraph: "1"
- button "View all"
```

# Test source

```ts
   1 | export class TC2Page {
   2 |     constructor(page){
   3 |         this.page = page ; 
   4 |         this.vendor = page.locator('span', { hasText: 'Vendors' });        
   5 |         this.search = page.getByText('Search');
   6 |         this.company = page.locator("//p[text()='testVendor123']");
   7 |         this.invite = page.getByRole('button', { name: 'Invite for Empanelment' });
   8 |         this.textArea = page.locator('textarea[rows="3"][required]');
   9 |         this.inviteButton = page.getByRole('button', { name: 'Invite' });
  10 |         this.notification = page.locator('svg.my-auto');
  11 |         this.logoutText = page.getByText('Logout');
  12 |     }
  13 |     async sendInvite(){
  14 |         await this.vendor.click();
> 15 |         await this.search.click();
     |                           ^ Error: locator.click: Error: strict mode violation: getByText('Search') resolved to 2 elements:
  16 |         await this.page.waitForTimeout(2000);
  17 |         await this.company.click();
  18 |         await this.invite.click(); 
  19 |         await this.page.waitForTimeout(2000);
  20 |         await this.textArea.fill("Accept My invite");
  21 |         await this.inviteButton.click();
  22 |     }
  23 |
  24 |     async logout(){
  25 |         await this.logoutText.click();
  26 |         await this.page.waitForTimeout(2000);
  27 |     }
  28 |
  29 |     async checkForNotification(){
  30 |         await this.page.waitForTimeout(2000);
  31 |         await this.notification.click(); 
  32 |     }
  33 | }
```