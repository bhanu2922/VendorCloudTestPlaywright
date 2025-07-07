export class checking_number_of_job_applied{
    constructor(){
        this.page = page ; 
        this.totaljobapplied = page.locator("//p[@class='text-base' and text()='Total job applied']/ancestor::div[1]//h5");
        this.showingResults = page.locator("(//p[contains(text(),'Showing')]//span)[2]")
    }
    async checkingTotalNumberOfJobsApplied (){

        const totalNumberOfJobsApplied = await this.totaljobapplied.textContent(); 
        await this.totaljobapplied.click();
        const actualNumberOfJobApplied = await this.showingResults.textContent();
        if(totalNumberOfJobsApplied == actualNumberOfJobApplied){
            console.log("Test Passed");
        } else {
            console.log("Test Failed")
        }
    }
}