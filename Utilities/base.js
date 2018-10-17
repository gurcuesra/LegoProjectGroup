var Base=function(){
    this.homeUrl='https://www.lego.com/en-us';

    this.navigateToHome=function(){
        browser.get(this.homeUrl);
    }
    this.navigateToKids=function(){
        browser.get('https://www.lego.com/en-us/kids');
    }
}
module.exports=new Base();