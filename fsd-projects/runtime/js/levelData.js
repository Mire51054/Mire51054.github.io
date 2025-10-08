var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 40},
          { type: "sawblade", x: 600, y: groundY - 25},
          { type: "sawblade", x: 900, y: groundY - 100},
          { type: "sawblade", x: 1400, y: groundY - 100},
          { type: "sawblade", x: 1800, y: groundY - 25},
          { type: "sawblade", x: 2400, y: groundY - 50},
          { type: "sawblade", x: 3000, y: groundY - 25},
          { type: "sawblade", x: 3600, y: groundY - 100},
          { type: "marker", x: 4000, y: groundY - 50},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -4,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 25},
          { type: "sawblade", x: 600, y: groundY - 100},
          { type: "sawblade", x: 900, y: groundY - 25},
          { type: "enemy", x: 1200, y: groundY - 50},
          { type: "sawblade", x: 1500, y: groundY - 25},
          { type: "enemy", x: 1800, y: groundY - 50},
          { type: "sawblade", x: 2100, y: groundY - 100},
          { type: "marker", x: 2400, y: groundY - 50},
        ],
      },
      {
        name: "Robot Run",
        number: 3,
        speed: -5,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 25},
          { type: "reward", x: 600, y: groundY - 50},
          { type: "enemy", x: 900, y: groundY - 50},
          { type: "enemy", x: 1200, y: groundY - 50},
          { type: "reward", x: 1500, y: groundY - 50},
          { type: "enemy", x: 1800, y: groundY - 50},
          { type: "sawblade", x: 2100, y: groundY - 100},
          { type: "marker", x: 2400, y: groundY - 50},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
