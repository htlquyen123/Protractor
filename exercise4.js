

describe("Exercise-travel with us", function(){
 

    it("Load app", function(){

        console.log("Launch app")
        browser.waitForAngularEnabled(false);
        browser.get("http://travelwithus.asia/");
        browser.driver.manage().window().maximize();
        browser.sleep(3000);
    })
    
    it('sign in button', ()=>{
        element(by.xpath("//a[contains(text(),'Sign')]")).click();
        browser.sleep(2000);
        element(by.id('email')).sendKeys("htlquyen89@mailinator.com");
        element(by.id('pwd')).sendKeys("12345678x@X");
        element(by.buttonText('Login')).click();
        browser.sleep(5000);

        element(by.xpath("//a[text()='Create Trip']")).click();
        browser.sleep(2000);
        element(by.id('title')).sendKeys("aaaa");
        element(by.id('place')).sendKeys("bbbbb");

    
    
        //  // element(by.xpath("//input[@id='start_date_val']/following::td[text()='30']")).click();  
        
        let startdate = element(by.xpath("//input[@id='start_date_val']")).click();
        browser.sleep(3000);
        startdate.sendKeys("31 May 2019");
        browser.sleep(2000);
        
      
        element(by.xpath("//input[@id='end_date_val']")).sendKeys("31 May 2019");

        browser.sleep(3000);

        element(by.id("members")).sendKeys("4");
        //element(by.xpath("//*[@id='myTripModal']/div/div/div[2]/form/button[1]")).click();
        //element(by.xpath("//button[text()='Submit'][@class='btn btn-success']")).click();
        
        browser.sleep(2000);
        
    })
    

});