
describe('Practice Beardelin', function(){
    it('login page',async function(){
        let txtName = browser.element(by.name("rq_Username"));
        let txtPass = browser.element(by.name("rq_Password"));
        let btnLogin = browser.element(by.buttonText("Accesso"))
        

        await browser.waitForAngularEnabled(false);
        await browser.get('http://10.1.0.169:3001/login')
        await browser.driver.manage().window().maximize();
        await txtName.sendKeys("admin");
        await txtPass.sendKeys("novigo@Tma2018")
        await btnLogin.click();

        browser.sleep(5000);
    })

    it('Offer page', async function(){
        let offer = browser.element(by.xpath("//div[@class='itemWrapper']/a[text()='Offerte']"));
        let creatDal = browser.element(by.xpath("//input[@name='Creata dal']"))
        let CreataAl = browser.element(by.xpath("//input[@name='Creata al']"))
        let txtCod = browser.element(by.xpath("//input[@name='Cod Cliente o Nominativo']"));
        let topi = browser.element(by.xpath("//div[@name='Tipologia cliente']//input"))
        let Aget = browser.element(by.xpath("//div[@name='Agente']//input"))

        await offer.click();
        browser.sleep(5000)
        await creatDal.sendKeys("05/11/2019")
        await CreataAl.sendKeys("07/11/2019")
        await txtCod.sendKeys(" Nominativo")
        browser.sleep(5000)
        await topi.sendKeys("RIVENDITORE")


        browser.sleep(5000)
    })
})