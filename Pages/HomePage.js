require('../Utilities/customlocators.js');
var HomePage=function(){
    this.SiteMaplist=element.all(by.css('.l-gf__inner > ul > li'));
    this.listSiteMap=['Customer Service','Building Instructions','Replacement Parts','Contact Us','Product Recalls'];
    this.mainDisplayMenus=element.all(by.css('.l-nav li'));
    this.listMainDislayMenus=['SHOP','PRODUCTS','SUPPORT','GAMES','LEGO® LIFE','VIDEOS','FOR KIDS'];
    
};
module.exports=new HomePage();
