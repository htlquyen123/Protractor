
describe("Exercise-3", function(){
    let iconW3 = element(by.xpath("/html/body/div[1]/a"));
    let title = element.all(by.xpath("//div[@class='w3-bar-block']/a"));


    it("Load app", function(){

        console.log("Launch app")
        browser.waitForAngularEnabled(false);
        browser.get("https://www.w3schools.com/");
        browser.driver.manage().window().maximize();
    })

    it("Verify click Items and title", async function(){

        console.log("click items")

        for (let index = 0; index < 9; index++) {
            let element = await title.get(index);
            let text = await element.getText();
            console.log("Verify the", text);
            await element.click();
            browser.sleep(3000);
           let _title = await browser.getTitle();
           _title =_title.toLowerCase();
            await iconW3.click();
            let temp = text.replace('Learn ','');
            temp = temp.toLowerCase();
            expect(_title).toContain(temp);
            browser.sleep(3000);

        }

    })

});