import {test} from "@playwright/test"
test("demo test",async ({page})=>{
   await page.goto("https://www.nicesoftwaresolutions.com/")
})