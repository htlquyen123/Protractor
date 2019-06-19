
describe('Practices let learn Protractor', function(){
    
    it('Login page', async function(){
        let lbName = browser.element(by.model("formData.name"));
        let lbEmail = browser.element(by.model("formData.email"));
        let bn = browser.element(by.xpath("//a[@class='btn btn-block btn-info']"));

        await browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
        await browser.driver.manage().window().maximize();
        await lbName.sendKeys("angular")
        await lbEmail.sendKeys("abc@gmail.com")
        await bn.click();
        await browser.sleep(3000)





    })
})