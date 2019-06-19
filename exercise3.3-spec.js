describe('Exercise 3', function () {
	let mainMenu = element.all(by.css('.art-menu a'));
   // console.log("menu",menu);
   //let menuArr = [];

   it('Launch Website', function () {
	   console.log("Launch website");
	   browser.waitForAngularEnabled(false);
	   browser.get("http://www.webcartoonmaker.com/");
	   browser.driver.manage().window().maximize();

   });
	it('should click to each title on the left menu one by one', function(){
	console.log("should click to each title on the left menu one by one")
	let mainWindow = browser.getAllWindowHandles();
	mainWindow.then(async function(parentWindowId){
		for(let i=0; i<11;i++){
			let menuItem = await mainMenu.get(i).getAttribute("textContent");
			let menuItemLocator = element(by.xpath("//a[contains(text(),'"+ menuItem +"')]"));
			await menuItemLocator.click();
			browser.sleep(5000);
			let pageTitle, pageURL;
			let windowArr = browser.getAllWindowHandles();
			windowArr.then(async function(tabIds){
				for (let temp of tabIds){
					if(temp!=parentWindowId){
						browser.switchTo().window(temp);
						pageURL = await browser.getCurrentUrl();
						browser.sleep(5000);
						
					}
				}
				pageTitle = await browser.getTitle();
				browser.sleep(5000);
				if(menuItem == "Home")
				{
					expect(pageTitle).toEqual("Welcome to Web Cartoon Maker!");
				}
				else if (menuItem == "Tales Animator")
				{
					expect(pageURL).toEqual("http://www.webcartoonmaker.com/ta/index.php")
				}
				else{
					//let menuItem = await mainMenu.get(i).getAttribute("textContent");
					expect(pageTitle.toString().includes(menuItem));
				}
				browser.sleep(5000);
			});
		}
	})
	});
});