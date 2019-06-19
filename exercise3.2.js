describe('Exercise 3', function () {
     let menu = element.all(by.css('.art-menu a'));
    // console.log("menu",menu);
    let menuArr = [];

    it('Launch Website', function () {
        console.log("Launch website");
        browser.waitForAngularEnabled(false);
        browser.get("http://www.webcartoonmaker.com/");
        browser.driver.manage().window().maximize();

    });

    it('click to each title one by one',async function () {
        console.log("Verify click each items")

        for (let index = 0; index < 11; index++) {
            let _title = await menu.get(index);

            let text= await _title.getText();
            text = text.replace(' and Tutorial','');
            console.log("Click menu:",text);

            _title.click();
            browser.sleep(3000);

            if(text == 'Home')
            {
                expect(browser.getCurrentUrl()).toEqual("http://www.webcartoonmaker.com/");
                browser.sleep(3000);
            }
            else if(text == 'Tales Animator')
            {
                browser.getAllWindowHandles().then(async function (handles) {
                    tab = await handles[1]; // this is your new window
                    browser.switchTo().window(tab).then(async function () {
                        browser.sleep(3000);
                        let sURL = await browser.getCurrentUrl();
                        expect(sURL).toEqual("http://www.webcartoonmaker.com/ta/index.php");

                    });
                });
            }
            else
            {
                let temp = await browser.getTitle();
                expect(temp).toContain(text);
                browser.sleep(3000);
            }


       }
     });
});