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

// Failing test..
test('1 + 1 should equal 2', function(t) {
    t.true(1 + 1 == 3);
});


// // Failing Test
// describe('Test Addition', function() {
//     it('1 + 1 should equal 2', function() {
//         assert.equal(2, 1 + 1);
//     });
// });
