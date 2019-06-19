

describe('Protractor Demo App', function() {


    let iconMenu = element(by.className("ico-menu"));
   // let iconMenu = element(by.xpath("//span[text()='MENU']"));
    //let aa = element(by.id("nav-main"));
    let mAboutUs = element(by.xpath("//a[text()='About Us']"));
    let mBlog = element(by.xpath("//a[text()='Blog']"));
    //let cbCategory = element(by.xpath("//span[text()='Categories']"));
    let cbCategory = element(by.xpath("//*[@id='box-filters-fixed']/div[1]/div/ul/li[3]/span"));
   // let webDesignItem = element(by.xpath("//span[text()='Categories']/following::a[text()='Web Design'][1]"));
    let webDesignItem = element(by.xpath("//*[@id='box-filters-fixed']/div[2]/div[2]/div/div[2]/ul/li[9]/strong/a"));
    let pagetwo = element(by.xpath("//a[text()='2']"));


    it('Launch website', function() {


      browser.waitForAngularEnabled(false);
      console.log('1. Launch Website')
      browser.get('https://www.awwwards.com/');
      browser.manage().window().maximize();
      browser.sleep(1000);

    });

    it('Click Menu', async function() {

       console.log("2. CLick menu")
       await iconMenu.click();
       browser.sleep(1000);

    });


    it('Scroll down', function() {
        console.log("3. Scroll down")
       // browser.actions().mouseMove(aa).perform();
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');

        browser.sleep(3000);

    });

    it('Select About Us', async function() {
        console.log("4. Select About Us")
        await mAboutUs.click();
        browser.sleep(3000);

    });

    it('Take screenshot of the page', function() {
        var fs = require('fs');
        console.log("5.Take screenshot of the page")
        function writeScreenShot(data, filename) {
            var stream = fs.createWriteStream(filename);
            stream.write(new Buffer.from(data, 'base64'));
            stream.end();
          }
          var content = element(by.id('content'));
          content.takeScreenshot().then(function(png) {
            writeScreenShot(png, 'content.png');
            browser.sleep(3000);

        });


    });

    it('Click Menu again', async function() {

        console.log("6. CLick menu again")
        await iconMenu.click();
        browser.sleep(1000);

    });

    it('Select Blog', async function() {

        console.log("7. Select Blog")
        await mBlog.click();
        browser.sleep(1000);

    });

    it('Select Category', async function() {

        console.log("8. Select Category")
        await cbCategory.click();
        browser.sleep(1000);

    });

    it('Select Web Design', async function() {

        console.log("9. Select Web Design")
        await webDesignItem.click();
        browser.sleep(3000);

    });

    it('Scroll down to the end',async function() {
        console.log("10. Scroll down then select Page2")
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
      //  browser.executeScript('window.scrollTo(0,10000);').then(function () {
       //       console.log('Scroll Down+++++');

        pagetwo.click();
        browser.sleep(2000);

    });

    it('Verify user is at page 2 ', async function() {

        console.log("11. Verify user is at page 2")
        let urlPage2 = await browser.getCurrentUrl();
        console.log(urlPage2)

        expect(urlPage2).toEqual("https://www.awwwards.com/blog/web-design-tag/?page=2");
        browser.sleep(1000);

    });
});