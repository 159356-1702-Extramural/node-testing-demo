var test = require('ava');
var game = require('./game.js');

var tim = {
    name : "Tim"
};

// Test Tim...
test('Tim\'s name should be equal to "Tim"', function(t) {
    t.true("Tim" == tim.name);
});

test('Tim\'s name should not be Jason', function(t) {
    t.true("Jason" != tim.name);
});

// Test Game...
test('The game name should be: Settlers of Catan', function(t) {
    t.true(game.getGameName() == 'Settlers of Catan');
});

// Another test..
test('1 + 1 should equal 2', function(t) {
    t.true(1 + 1 == 2);
});

// One more..
test('2 + 2 should equal 4', function(t) {
    t.is(2 + 2, 4);
});