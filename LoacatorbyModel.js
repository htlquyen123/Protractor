
describe('Locator by Binding', function(){
    
    // beforeEach(function(){
    //     browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
    //     browser.driver.manage().window().maximize();

    // })
    // afterEach(function(){
    //     browser.sleep(3000);

    // })
    
    it('Launch website', function() {
        console.log("Launch website")
        browser.waitForAngularEnabled(false);
        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
      //  browser.driver.manage().window().maximize();
        // expect(browser.getTitle()).toEqual('Super Calculator');
    });
    it('validating a Calculator',async function(){

        element(by.model("first")).sendKeys("5");
        element(by.model("second")).sendKeys("7");
        element(by.buttonText("Go!")).click();
        browser.sleep(3000);
        element(by.model("first")).sendKeys("9");
        element(by.model("second")).sendKeys("8");
        element(by.buttonText("Go!")).click();
        browser.sleep(3000);
        // let text = await element(by.binding("latest")).getText();
        // console.log(text);


    });

    it('Pringting the entire table data',async function(){
        console.log("Pringting the first row data")
        element.all(by.repeater("result in memory")).getText().then(function(row){
            let numOfITems = row.length;
            for (let index = 0; index < numOfITems; index++) {
                let table = element(by.repeater("result in memory").row(index)).getText();
                table.then(function(text){

                    console.log(text);
                
                });
                
            }
        });  

    });
    // it('Pringting the entire table data',async function(){
    //     console.log("Pringting the first row data")
    //     element.all(by.repeater("result in memory")).getText().then(function(text){

    //         console.log(text);
    //         browser.sleep(3000);
    //     });  

   // });

});
