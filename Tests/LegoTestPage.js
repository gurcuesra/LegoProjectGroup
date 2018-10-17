require('../Utilities/customlocators.js');
var Base=require('../Utilities/base.js');
var HomePage=require('../Pages/Homepage.js');
describe('Lego Project',()=>{
        beforeEach(function(){
        Base.navigateToHome();
        browser.manage().timeouts().implicitlyWait(10000);  
    })

      it('Should verify title',()=>{
        expect(browser.getTitle()).toEqual('LEGO.com US - Inspire and develop the builders of tomorrow');
      })
      it("should verify and list site map list",()=>{
          expect(HomePage.SiteMaplist.first().isDisplayed()).toBe(true);
          expect(HomePage.SiteMaplist.count()).toEqual(HomePage.listSiteMap.length); 
          HomePage.SiteMaplist.first().getText().then(function(array){
              for(let i=0; i<array.lenght; i++){
                  expect(array[i]).toEqual(HomePage.listSiteMap[i]);
              }
          })
               
      })
      it('should click Shop tag and Check',()=>{
          element(by.linkText('SHOP')).click();
          browser.sleep(3000);
          expect(element(by.css('.l-xlink__header')).isDisplayed()).toBe(true);
          expect(element(by.css('#dialog-description>p')).getText()).toEqual('Please note that you must be over 18 years old or with an adult to buy online.')
          element(by.buttonText('Close')).click();
          browser.sleep(3000);

      })
      it('should verify 5 images displayed in mainstage',()=>{
          expect(element.all(by.css('.stage.ng-scope>img')).count()).toEqual(5);
          
      })
      it('should display Video in main page',()=>{
          expect(element(by.css('.video__inner')).isDisplayed()).toBe(true);
      })
      it('should check display top menu items and verify for each',()=>{
          expect(HomePage.mainDisplayMenus.isDisplayed()).toEqual([ true, true, true, true, true, true, true ]);
          expect(HomePage.mainDisplayMenus.count()).toEqual(7);
          HomePage.mainDisplayMenus.getText().then(function(list){
            for(let i=0; i<list.lenght; i++){
                expect(list[i]).toEqual(HomePage.listMainDislayMenus[i]);
            }
          })

      })
      


})