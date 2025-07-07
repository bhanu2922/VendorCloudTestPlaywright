# Test info

- Name: In vendor side when we click on partners and then click on empaneled the search bar is not working in active partners section
- Location: C:\Users\Fleek\Desktop\PlayWrightAutomationFrmework\test\Vendor\Empaneled_Search_Test.spec.js:4:1

# Error details

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for getByText('TestPartner4')

    at TC11Page.searchingPartner (C:\Users\Fleek\Desktop\PlayWrightAutomationFrmework\pages\TC11Page.js:16:34)
    at C:\Users\Fleek\Desktop\PlayWrightAutomationFrmework\test\Vendor\Empaneled_Search_Test.spec.js:10:5
```

# Page snapshot

```yaml
- text: Vendor
- button
- list:
  - button "Dashboard":
    - link "Dashboard":
      - /url: /vendor/dashboard
  - button "Requirements":
    - link "Requirements":
      - /url: /vendor/requirements
  - button "Applicants":
    - link "Applicants":
      - /url: /vendor/candidate
  - button "Bench":
    - link "Bench":
      - /url: /vendor/bench
  - button "Partners"
  - list:
    - button "Empaneled":
      - link "Empaneled":
        - /url: /vendor/clients
    - button "Onboarding":
      - link "Onboarding":
        - /url: /vendor/onboarding
- separator
- text: SETTINGS
- list:
  - button "Organization Profile":
    - link "Organization Profile":
      - /url: /vendor/profile
  - button "Members":
    - link "Members":
      - /url: /vendor/members
- list:
  - button "test Vendor testvendor12345@yopmail.com":
    - link "test Vendor testvendor12345@yopmail.com":
      - /url: /vendor/account
      - paragraph: test Vendor
      - paragraph: testvendor12345@yopmail.com
  - separator
  - text: Logout
- tablist "secondary tabs example":
  - tab "Active Partners" [selected]
  - tab "Archived Partners"
- textbox "Search Partners": TestPartner4
- button "filter"
- img "Org Icon"
- paragraph: Green software
- paragraph: New Delhi
- paragraph:
  - paragraph: software company
- text: "800"
```

# Test source

```ts
   1 | export class TC11Page {
   2 |     constructor(page){
   3 |         this.page = page ; 
   4 |         this.partner = page.getByRole('button', { name: 'Partners' });
   5 |         this.empaneled = page.getByRole('button', { name: 'Empaneled' });
   6 |         this.search = page.getByPlaceholder('Search Partners');
   7 |         this.partnerSearch = page.getByText('TestPartner4'); 
   8 |
   9 |     }
  10 |     async searchingPartner(){
  11 |         await this.page.waitForTimeout(3000);
  12 |         await this.partner.click(); 
  13 |         await this.empaneled.click();
  14 |         await this.search.fill('TestPartner4');
  15 |         await this.page.waitForTimeout(3000);
> 16 |         await this.partnerSearch.click();
     |                                  ^ Error: locator.click: Test timeout of 40000ms exceeded.
  17 |     }
  18 | }
```