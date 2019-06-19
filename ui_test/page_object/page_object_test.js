let jsonHelper = require('../../helper/jsonHelper/json.Helper');
let pageObject =  function () {

    let gSearch = element(by.xpath("//div[@class='box-heading style5']//div"));
    let input =  element(by.xpath("//input[@id='search-text']"));
    let title = element.all(by.xpath("//div[@class='box-heading']//h2"));
    let arr = [];
    let iconClear = element(by.xpath("//div[@class='bt-close js-search-close']"));
    let lab = element(by.xpath("//div[@class='logo-header']"));
    let tooltip = element(by.xpath("//div[@class='logo-tooltip']//a"));
    let mAboutUs = element(by.xpath("//a[text()='About Us']"));
    let blog = element(by.xpath("//a[text()='Blog']"));
    let cbCategory = element(by.xpath("//span[text()='Categories']"));
    let webSite = element(by.xpath("//div[@class='box-filters-content']//a[text()='Web Design']"));
    this.launchWebsite = async function (url) {
       try{
           browser.get(url);
           browser.driver.manage().window().maximize();

       }catch (e) {
           throw new Error("Can't launch website " + e);
       }
    }

    this.clickSearch = async function (){
        try {
           
            let readXpath = await jsonHelper.readJsonData('iconSearch');
            let search = await element(by.xpath(readXpath));
            await search.click();
            browser.sleep(1000);
        } catch (error) {
            throw new Error("Can't find Search button" + error);
        }
    }

    this.inputText = async function (){
        try {

            await input.sendKeys("READ");
            browser.sleep(1000);

        } catch (error) {
            throw new Error("Can't input text " + error);
        }
    }

    this.getResult = async function (){
        try {

            let txtResult = await gSearch.getText();
            console.log(txtResult)

        } catch (error) {
            throw new Error("Can't get result " + error);
        }
    }

    this.getOfTitle = async function (){
        try {

            for (let index = 1; index < 5; index++) {
                let value = await title.get(index).getAttribute('textContent');
                arr.push(value);  
                browser.sleep(3000);              
            }
            console.log(arr)

        } catch (error) {
            throw new Error("Can't get result " + error);
        }
    }

    this.clearSearch = async function (){
        try {

            await iconClear.click();
            browser.sleep(3000);

        } catch (error) {
            throw new Error("Can't get result " + error);
        }
    }

    this.clickTooltip = async function (){
        try {

            await browser.actions().mouseMove(lab).mouseMove(tooltip).click().perform();
            browser.sleep(3000);

        } catch (error) {
            throw new Error("Can't get result " + error);
        }
    }

    this.getPageTitle = async function (){
        try {

            let _url = await browser.getCurrentUrl();
            console.log(_url)
           // let _pageTitle = await browser.getTitle().toString();
           // console.log(_pageTitle);
            expect(browser.getTitle()).toEqual('New Brand - Awwwards');
            browser.sleep(3000);
        } catch (error) {
            throw new Error("Can't get result " + error);
        }
    }

    this.clickMenu = async function(){
        try {
            let readMenu = await jsonHelper.readJsonData("menu");
            let menu = await element(by.xpath(readMenu));
            await menu.click();
            browser.sleep(3000);
        } catch (error) {
            throw new Error("Can't get result " + error);
        }
    }

    
    this.clickAboutUs = async function(){
        try {
            
            mAboutUs.click();
            browser.sleep(3000);
        } catch (error) {
            throw new Error("Can't get result " + error);
        }
    }
    this.clickBlog = async function(){
        try {
            blog.click();
            browser.sleep(3000);
        } catch (error) {
            throw new Error("Can't get result " + error);
        }
    }
    this.clickCategory = async function(){
        try {
            cbCategory.click();
            browser.sleep(3000);
        } catch (error) {
            throw new Error("Can't get result " + error);
            
        }
    }
    this.clickWebSite = async function(){
        try {
            webSite.click();
            browser.sleep(3000);
        } catch (error) {
            throw new Error("Can't get result " + error);
            
        }
    }


};
module.exports = new pageObject();