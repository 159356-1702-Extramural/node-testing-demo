
var config = {
    name : "Settlers of Catan"
};

function getGameName()
{
    return config.name; 
} 



module.exports = {
  getGameName: getGameName
}