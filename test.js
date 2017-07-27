var game = require('./game.js');

var assert = require('assert');

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


//Selenium

const {Builder, By, until} = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.google.com/ncr')
    .then(_ => driver.findElement(By.name('q')).sendKeys('webdriver'))
    .then(_ => driver.findElement(By.name('btnG')).click())
    .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    .then(_ => driver.quit());
