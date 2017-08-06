var game = require('./game.js');

var assert = require('assert');
var selenium = require('selenium-webdriver')
var tim = {
    name : "Tim"
};

// Test Tim...
describe('Tim Test', function() {
    describe('#name', function() {       
        it('Tim\'s name should be equal to "Tim"', function() {
            assert.equal("Tim", tim.name);
        });
        it('Tim\'s name should not be Jason', function() {
            assert.notEqual("Jason", tim.name);
        });
    });
});

// Test Game...
describe('Game Test', function() {
    describe('#game', function() {
        it('The game name should be: Settlers of Catan', function() {
            assert.equal(game.getGameName(), 'Settlers of Catan');
        });
    });
});

// Failing Test
describe('Test Addition', function() {
    it('1 + 1 should equal 2', function() {
        assert.equal(2, 1 + 1);
    });
});




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
