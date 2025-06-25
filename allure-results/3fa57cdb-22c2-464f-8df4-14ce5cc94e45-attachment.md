# Test info

- Name: In vendor side when we go to the requirement section and click on matching candidate the search bar is not working
- Location: C:\Users\Fleek\Desktop\PlayWrightAutomationFrmework\test\Vendor\Matching_CandidateSearch_Issue_Test.spec.js:6:6

# Error details

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for getByText('Automation Test Engineer (Playwright/Selenium)')

    at TC10Page.checkingInRequirementSection (C:\Users\Fleek\Desktop\PlayWrightAutomationFrmework\pages\TC10Page.js:14:54)
    at C:\Users\Fleek\Desktop\PlayWrightAutomationFrmework\test\Vendor\Matching_CandidateSearch_Issue_Test.spec.js:12:5
```

# Page snapshot

```yaml
- text: Vendor
- img
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
  - button "Messages":
    - link "Messages":
      - /url: /vendor/messages
- separator
- text: SETTINGS
- list:
  - button "Organization Profile":
    - link "Organization Profile":
      - /url: /vendor/profile
  - button "Subscriptions":
    - link "Subscriptions":
      - /url: /vendor/subscriptions
  - button "Members":
    - link "Members":
      - /url: /vendor/members
- list:
  - button "Vendor test testvendor123@yopmail.com":
    - link "Vendor test testvendor123@yopmail.com":
      - /url: /vendor/account
      - paragraph: Vendor test
      - paragraph: testvendor123@yopmail.com
  - separator
  - text: Logout
- button "Check matching candidate" [disabled]:
  - img
  - text: Check matching candidate
- text: Show hot
- checkbox "controlled"
- textbox "Search": Automation Test Engineer (Playwright/Selenium)
- button "Status"
- button "Resources"
- button "filter"
- table:
  - rowgroup:
    - row "Role Status Date Posted Positions (Placed) Applicants":
      - cell:
        - checkbox [checked]
      - cell "Role"
      - cell "Status"
      - cell "Date Posted"
      - cell "Positions (Placed)"
      - cell "Applicants"
  - paragraph: No data available
  - rowgroup
- paragraph: Showing 1 to 6 of 6 results
- button [disabled]
- button [disabled]
```

# Test source

```ts
   1 | export class TC10Page {
   2 |     constructor(page){
   3 |         this.page = page ; 
   4 |         this.requirementOption = page.getByRole('link', { name: 'Requirements' });
   5 |         this.searchBar = page.locator('//input[@placeholder="Search"]');
   6 |     }
   7 |
   8 |     async checkingInRequirementSection(searchedtext){
   9 |         
  10 |         await this.requirementOption.click();
  11 |         await this.page.waitForTimeout(3000);
  12 |         await this.searchBar.fill(`${searchedtext}`);
  13 |         await this.page.waitForTimeout(3000);
> 14 |         await this.page.getByText(`${searchedtext}`).click();
     |                                                      ^ Error: locator.click: Test timeout of 40000ms exceeded.
  15 |
  16 |     }
  17 | }
```