


var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    SauceLabs = require("saucelabs"),
    username = "sumnerfit",
    accessKey = "e8a11001-6685-43c4-901b-042e862a93f4",
    saucelabs = new SauceLabs({
      username: username,
      password: accessKey
    });

test.describe('Google Search', function() {
  this.timeout(60000);

  var driver;

  test.beforeEach(function() {
    var browser = process.env.BROWSER,
        version = process.env.VERSION,
        platform = process.env.PLATFORM,
        server = "http://" + username + ":" + accessKey + 
                  "@ondemand.saucelabs.com:80/wd/hub"; 

    driver = new webdriver.Builder().
      withCapabilities({
        'browserName': 'chrome',
        'platform': 'Windows XP',
        'version': '43.0',
        'username': username,
        'accessKey': accessKey
      }).
      usingServer(server).
      build();

    driver.getSession().then(function (sessionid){
      driver.sessionID = sessionid.id_;
    });

  });

  test.afterEach(function(done) {
    var title = this.currentTest.title,
        passed = (this.currentTest.state === 'passed') ? true : false;

    driver.quit();

    saucelabs.updateJob(driver.sessionID, {
      name: title,
      passed: passed
    }, done);
  })

  test.it('searching for webdriver using google', function() {
    driver.get('http://google.com');

    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('webdriver');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'webdriver');
    });

  });
});
