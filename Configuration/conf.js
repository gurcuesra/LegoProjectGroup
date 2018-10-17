let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    directConnect: true,
     //which browser would you want to use for your tests?
    capabilities: {'browserName': 'chrome'},
 
    //the name of your test scripts file
    specs: ['../Tests/legotestpage.js'],
    // suites:{
    //   smoke:['../Tests/addCustomer.spec.js','../Tests/demo.js'],
    // regression:['../Tests/*.js']
    // },
    //which BDD framework we're going to use
    framework: 'jasmine2',
      
    onPrepare: function(){
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
          displayFailuresSummary: true,
          displayFailuredSpec: true,
          displaySuiteNumber: true,
          displaySpecDuration: true
        }));

        jasmine.getEnv().addReporter(new HtmlReporter({
          baseDirectory: '../report/screenshots',
          preserveDirectory:false,
          screenshotsSubfolder:'images',
          jsonsSubfodler:'jsons',
          docName:'Cybertek-report.html'
       }).getJasmine2Reporter());

        
      }
    };