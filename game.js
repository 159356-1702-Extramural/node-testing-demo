
var config = {
    name        : "Settlers of Catan",
    maxPlayers  : 4
};

// Gets the name of the game
function getGameName()
{
    return config.name; 
} 

// Gets the max number of players
// NOTE: This function not covered by unit tests
function getMaxPlayers()
{
    return config.maxPlayers;
}

module.exports = {
  getGameName   : getGameName,
  getMaxPlayers : getMaxPlayers
};