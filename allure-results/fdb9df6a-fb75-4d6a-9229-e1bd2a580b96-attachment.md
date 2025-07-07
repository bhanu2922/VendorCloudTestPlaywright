# Test info

- Name: Adding Requirement
- Location: C:\Users\Fleek\Desktop\PlayWrightAutomationFrmework\test\Partner\adding_Requirement.Test.spec.js:5:1

# Error details

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('#tags-readOnly-label')

    at TC7Page.selectingPerticularVendor (C:\Users\Fleek\Desktop\PlayWrightAutomationFrmework\pages\TC7Page.js:31:33)
    at C:\Users\Fleek\Desktop\PlayWrightAutomationFrmework\test\Partner\adding_Requirement.Test.spec.js:12:24
```

# Page snapshot

```yaml
- img
- heading "Post Requirements" [level=2]
- text: Paste Requirement Basic Information Vendors Title
- textbox "Title": C++ Developer
- button "Normal":
  - text: Normal
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- paragraph: A C++ Developer role involves designing, implementing, and maintaining C++ applications. The developer will collaborate with a team to develop high-quality software solutions.
- list:
  - listitem: • Develop and implement C++ applications
  - listitem: • Collaborate with team members on software design
  - listitem: • Debug and maintain existing codebase
  - listitem: • Optimize applications for performance
  - listitem: • Write clean, maintainable code
- text: Experience
- textbox "Experience": Not specified
- text: Budget
- textbox "Budget": Competitive, based on experience
- text: Number of Positions
- textbox "Number of Positions": "1"
- text: Contract Period
- textbox "Contract Period": Full-time, Permanent
- text: "Job Location:"
- radiogroup:
  - radio "Onsite"
  - text: Onsite
  - radio "Hybrid"
  - text: Hybrid
  - radio "Remote"
  - text: Remote
- text: Select Client
- combobox "Delll"
- text: Skills
- button "C++"
- button "Object-Oriented Programming"
- button "Debugging"
- button "Software Design"
- combobox "Skills"
- button "Open"
- text: Remark for Vendor
- textbox "Remark for Vendor": None
- button "Back"
- button "Next"
```

# Test source

```ts
   1 | import { expect } from "@playwright/test";
   2 | export class TC7Page {
   3 |     constructor(page){
   4 |         this.page = page ; 
   5 |         this.postRequirement = page.locator('button', { hasText: 'Post a requirement' });
   6 |         this.textRequirement = page.locator('textarea[name="promptJson"]');
   7 |         this.nextButton = page.getByText('Next');
   8 |         this.anotherNextButton = page.locator('button', { hasText: 'Next' });
   9 |         this.selectClientCode = page.locator('#mui-component-select-clientCode');   // , { id: 'mui-component-select-clientCode' });
  10 |         this.selectClient = page.getByRole('option', { name: 'Delll' });
  11 |         this.searchVendor = page.locator('#placeholder');
  12 |         this.empanelledClient = page.locator('#tags-readOnly');
  13 |         this.submitButton = page.getByRole('button', { name: 'Submit' });
  14 |         this.table = page.locator('//table//tbody//tr');
  15 |         this.requirementsTab = page.locator('span', { hasText: 'Requirements' });
  16 |         // this.activeId = page.locator('#tags-readOnly').getAttribute('aria-activedescendant');
  17 |         this.selectVendor = page.locator('#tags-readOnly-label');
  18 |         this.activeVendor = page.locator('li', { hasText: 'DUCAT' });
  19 |     }
  20 |     
  21 |     async postRequirements(postName ){ 
  22 |         await this.postRequirement.click();
  23 |         await this.textRequirement.fill(postName);
  24 |         await this.nextButton.click();
  25 |         await this.selectClientCode.click();
  26 |         await this.selectClient.click();
  27 |         await this.anotherNextButton.click();
  28 |     }
  29 |     async selectingPerticularVendor(){
  30 |        //  await page.locator(`#${activeId}`).click(); 
> 31 |         await this.selectVendor.click();
     |                                 ^ Error: locator.click: Test timeout of 40000ms exceeded.
  32 |        //  await this.empanelledClient.fill('testVendor123');
  33 |         await this.submitButton.click();
  34 |         // await this.page.waitForTimeout(3000);
  35 |         console.log("Toast"); 
  36 |         const toastMessage = this.page.locator("//p[contains(text(), 'Requirement created and shared successfully')]");
  37 |
  38 |         await expect(toastMessage).toBeVisible({ timeout: 5000 });
  39 |
  40 |         // if(){
  41 |         //     console.log("Test Passed")
  42 |         // } else {
  43 |         //     console.log("Test Failed")
  44 |         // }
  45 |     }
  46 |
  47 |     async clickingRequiementTab(){
  48 |         await this.requirementsTab.click();
  49 |     }
  50 |
  51 |     async searchingPerticularRequirement(){
  52 |         await this.page.waitForTimeout(5000);
  53 |         let isFind = false ;  
  54 |         const rows = await this.table.count();
  55 |         // const rows = await tableRows.count();
  56 |         console.log(rows);
  57 |         for(let i = 1 ; i <= rows ; i++){
  58 |             if(await this.page.locator(`//table//tbody//tr[${i}]//th[2]//div[1]//div`).textContent() == 'Software Developer' 
  59 |                     && 
  60 |                await this.page.locator(`//table//tbody//tr[${i}]//th[2]//div[2]//div`).textContent() == 'TestPartner4'){
  61 |                 isFind = true ; 
  62 |                 continue;
  63 |             }
  64 |             else {
  65 |                 break;
  66 |             }
  67 |         }
  68 |         if(isFind){
  69 |             console.log("Test Passed");
  70 |         }else {
  71 |             console.log("Test Failed");
  72 |         }
  73 |     }
  74 | }
```