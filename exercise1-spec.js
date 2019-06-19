describe('Protractor Demo App', function() {
    let slogan = element(by.xpath("//h1[@class='slogan']"));
    let magni = element(by.id("js-search-container"));
    let input = element(by.id("search-text"));
    let gSearch = element(by.xpath("//div[@class='box-heading style5']//div"));
    let iconClear = element(by.xpath("//div[@class='bt-close js-search-close']"));
    let lbAww = element(by.xpath("//*[@class='logo-header']//a[@aria-label='Awwwards']"));
    let toolTip = element(by.xpath("//*[@class='logo-tooltip']//a"));
    let title = element.all(by.xpath("//div[@class='box-heading']//h2"));
    let titleArr = [];

    it('Launch website', function() {
        console.log("Launch website")
        browser.waitForAngularEnabled(false);
        browser.get('https://www.awwwards.com/');
        browser.driver.manage().window().maximize();
        // expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('Check the slogan of website',async function() {
        console.log("1. Get slogan")
        let text = await slogan.getText();
        expect(text.toString()).toEqual('The awards of design, creativity and innovation on the internet');
    });

    it('Click to magnifier',async function() {
        console.log("3. Click to magnifier")
        await magni.click();
        browser.sleep(1000);
    });

    it('Input value to search',async function() {
        console.log("4. Input value to search")
        await input.sendKeys("READ");
        browser.sleep(5000);
    });

    it('Input value to search',async function() {
        console.log("5. Get search result")
       let txtResult = await gSearch.getText();
       console.log(txtResult)
        browser.sleep(5000);
    });


    it('Get title',async function() {
        console.log("6. Get title")
        for(let i =1;i<5;i++){
            let value = await title.get(i).getAttribute("textContent");
            titleArr.push(value);
        }
        console.log(titleArr)
    });

    it('Clear search value',async function() {
        console.log("8. Clear search value")
        await iconClear.click();
        browser.sleep(5000);
    });


    it('Hover mouse and click tooltip',async function() {
        console.log("9. Hover mouse and click tooltip")
       // browser.waitForAngular();
        await browser.actions().mouseMove(lbAww).mouseMove(toolTip).click().perform();
        browser.sleep(1000);
      //  await toolTip.click();
       // await browser.actions().mouseMove(toolTip).click().perform();
       // browser.sleep(5000);
    });

    it('Get page title',async function() {
        console.log("10. Get page title")
        var _url = await browser.getCurrentUrl();
        console.log("get URL",_url);

        var _title= await browser.getTitle().toString();
        console.log(_title);
        expect(browser.getTitle()).toEqual('New Brand - Awwwards');

        browser.sleep(5000);
    });
    });

