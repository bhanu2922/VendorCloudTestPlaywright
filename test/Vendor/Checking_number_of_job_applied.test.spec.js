import {test} from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage";
import { checking_number_of_job_applied } from "../../pages/checking_number_of_job_applied";

test('checking number of jobs applied!!' , async ({page})=>{
    const login = new LoginPage(page); 
    const jobApplied = new checking_number_of_job_applied(page);
    await login.goto(); 
    await login.login("testvendor12345@yopmail.com" , "Test@1234"); 
    await jobApplied.checkingTotalNumberOfJobsApplied();
    
})