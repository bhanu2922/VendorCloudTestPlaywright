# Test info

- Name: System fails to alert users when creating a weak (numeric-only) password
- Location: C:\Users\Fleek\Desktop\PlayWrightAutomationFrmework\test\Partner\weak_password_test.spec.js:5:1

# Error details

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('text=Sign Up')

    at TC4Page.fillSignupForm (C:\Users\Fleek\Desktop\PlayWrightAutomationFrmework\pages\TC4Page.js:7:49)
    at C:\Users\Fleek\Desktop\PlayWrightAutomationFrmework\test\Partner\weak_password_test.spec.js:10:21
```

# Page snapshot

```yaml
- paragraph: Bridging the Gap Between Clients and Vendors
- paragraph: Streamline collaboration and foster partnerships for seamless bench resource hiring.
- img "Slide 1"
- paragraph: Discover the Right Talent, Every Time
- paragraph: Effortlessly connect with a curated network of skilled bench resources.
- img "Slide 2"
- paragraph: Place Top Talent with Confidence
- paragraph: Empowering vendors to showcase expertise and match with premium opportunities.
- img "Slide 3"
- paragraph: Unlock Insights with Advanced Analytics
- paragraph: Track performance, optimize hiring strategies, and make data-driven decisions effortlessly.
- img "Slide 4"
- img "Vendors Cloud Logo"
- heading "Log in to your account" [level=1]
- paragraph: Or create a new account
- text: Email Address
- textbox "Email Address"
- text: Password
- textbox "Password"
- button
- checkbox "Remember me"
- text: Remember me Forgot your password?
- button "Login"
```

# Test source

```ts
   1 | export class TC4Page {
   2 |     constructor(page){
   3 |         this.page = page ; 
   4 |
   5 |     }
   6 |     async fillSignupForm() {
>  7 |         await this.page.locator('text=Sign Up').click();
     |                                                 ^ Error: locator.click: Test timeout of 40000ms exceeded.
   8 |         await this.page.locator('[name="firstName"]').fill("Testing");
   9 |         await this.page.locator('[name="lastName"]').fill("vendor");
  10 |         await this.page.locator('[name="companyName"]').fill("Testing Company");
  11 |         await this.page.locator('[name="email"]').fill("testingvendor2345@yopmail.com");
  12 |         await this.page.locator('[name="password"]').fill("Test");
  13 |         await this.page.getByRole('button', { name: 'Continue' }).click();
  14 |         await this.page.waitForTimeout(5000);
  15 |         await this.page.locator("//*[name()='svg'])[2]");
  16 |     }
  17 | }
```