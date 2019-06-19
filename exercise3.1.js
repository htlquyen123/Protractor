describe('Exercise 3', function () {
    // let menu = element.all(by.xpath("//*[@class='art-menu']"));
    // console.log("menu",menu);
    let menuArr = [];

    it('Launch Website', function () {
        console.log("Launch website");
        browser.waitForAngularEnabled(false);
        browser.get("http://www.webcartoonmaker.com/");
        browser.driver.manage().window().maximize();

    });

    it('click to each title one by one', function () {
        console.log("click to each title one by one");
        let arrayUrl = [
            "http://www.webcartoonmaker.com/",
            "http://www.webcartoonmaker.com/index.php?art=download",
            "http://www.webcartoonmaker.com/index.php?art=help/help",
            "http://www.webcartoonmaker.com/index.php?art=help/library",
            "http://www.webcartoonmaker.com/index.php?art=discuss",
            "http://www.webcartoonmaker.com/index.php?art=funway",
            "http://www.webcartoonmaker.com/index.php?art=gallery",
            "http://www.webcartoonmaker.com/index.php?art=news/news",
            "http://www.webcartoonmaker.com/index.php?art=awards",
            "http://www.webcartoonmaker.com/index.php?art=svg",
            "http://www.webcartoonmaker.com/ta/index.php"
        ]
        element.all(by.css('.art-menu a')).then(function (items) {
            console.log("Count:", items.length);
            for (var index = 1; index < items.length; index++) {
               // console.log("Index: ", index);
                var option = element.all(by.css('.art-menu a')).get(index);
                option.getText().then(function (text) {
                    console.log(text);
                });

                option.click();
                browser.waitForAngular();
                browser.getAllWindowHandles().then(function (handles) {
                    tab = handles[1] || handles[0]; // this is your new window
                    browser.switchTo().window(tab).then(function () {
                        browser.getCurrentUrl().then(function(url) {
                            console.log("URL= "+ url);
                            let indexUrl = arrayUrl.indexOf(url);
                            if (indexUrl != -1) {
                                expect(url).toEqual(arrayUrl[indexUrl]);
                            } else {
                                console.log("Not found url:", url);
                            }
                        });
                    });
                });
                browser.sleep(3000);
            }
        });
    });

});