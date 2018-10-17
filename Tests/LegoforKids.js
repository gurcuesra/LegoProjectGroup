require('../Utilities/customlocators.js');
var Base=require('../Utilities/base.js');
var HomePage=require('../Pages/Homepage.js');
var kidsPage=require('../Pages/kidsPage.js');
//describe('Lego web application',()=>{
 
 describe('FOR KIDS Page',()=>{
     beforeEach(function(){
       browser.waitForAngularEnabled(false);
       Base.navigateToKids();
       //browser.sleep(2000);
    })
    it('Check and verify LOGO image is Displayed and navigates to Home page',()=>{
        expect(kidsPage.logoPath.isDisplayed()).toBe(true);
       kidsPage.logoPath.click();
        browser.getCurrentUrl().then(function(currentURL){
            expect(currentURL).toEqual('https://www.lego.com/en-us/');
        })
    })

    fit('Check top 5 images are Displayed',()=>{
        element(by.css('.navigation img')).getText().then(function(c){
            console.log(c);
        })
        
     })
 })
//})