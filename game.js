
var config = {
    name        : "Settlers of Catan",
    maxPlayers  : 4,
    minPlayers  : 3
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

// Gets the min number of players
// NOTE: This function not covered by unit tests
function getMinPlayers()
{
    return config.minPlayers;
}

module.exports = {
    getGameName   : getGameName,
    getMaxPlayers : getMaxPlayers,
    getMinPlayers : getMinPlayers
};