let pageObj = require('../page_object/page_object_test');
let jsonHelper = require('../../helper/jsonHelper/json.Helper');

jsonHelper.createJsonPath('data/json/dataTest.json');
describe('Protractor Demo App', function() {
    

    it('Launch website', async function() {
        browser.waitForAngularEnabled(false);
        console.log("Test page object");
        let urlPath = await jsonHelper.readJsonData('url');
        await pageObj.launchWebsite(urlPath);

        let text = await jsonHelper.readJsonData('data');
        console.log(text);
    });

    it('Click to magnifier',async function() {
        
        await pageObj.clickSearch();      
    });
 
    
    it('Input value to search',async function() {
        
        await pageObj.inputText();
        
    });

    it('Input value to search',async function() {
        
        await pageObj.getResult();
        
    });

    it('Get title',async function() {
        
        await pageObj.getOfTitle();
        
    });

    it('Clear search results', async function(){
        
        await pageObj.clearSearch();

    });

    it('hover mouse and click tooltip',async function() {
        
        await pageObj.clickTooltip();
        
    });

    // it('Get page title', async function(){
        
    //     await pageObj.getPageTitle();

    // });

    it('Click Menu', async function() {

        await pageObj.clickMenu();
       
     });

     it('Select About Us', async function() {
        
        await pageObj.clickAboutUs();
       
    });

    it('Click Menu again', async function() {

        await pageObj.clickMenu();
        
     });

     it('Select Blog', async function() {

        await pageObj.clickBlog();

    });
    it('Select Category', async function() {

        await pageObj.clickCategory();
       
    });

    // it('Select webSite', async function() {

    //     await pageObj.clickWebSite();
       
    // });

});