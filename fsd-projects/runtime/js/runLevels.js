var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x,y) {
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/sawblade.png");
    obstacleImage.x = -25;
    obstacleImage.y = -25;
    sawBladeHitZone.addChild(obstacleImage);
    }
    
     
    function createEnemy(x,y) {
      var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x
    enemy.y = y
    game.addGameItem(enemy);
    enemy.velocityX = -2;
    enemy.rotationalVelocity = -9999999999999999999999999;
    enemy.onPlayerCollision = function() {
     game.changeIntegrity(-10)
    };
    enemy.onProjectileCollision = function() {
     game.increaseScore(100);
     enemy.flyTo(5000, -500);
    };
    }
    function createReward(x,y) {
      var reward = game.createGameItem("reward", 25);
    var yellowSquare = draw.rect(50, 50, "yellow");
    yellowSquare.x = -25;
    yellowSquare.y = -25;
    reward.addChild(yellowSquare);
    reward.x = x
    reward.y = y
    game.addGameItem(reward);
    reward.velocityX = -2;
    reward.rotationalVelocity = -9999999999999999999999999;
    reward.onPlayerCollision = function() {
     game.increaseScore(100);
     reward.flyTo(5000, -500);
    };
    }
     function createMarker(x,y) {
      var marker = game.createGameItem("marker", 25);
    var blueSquare = draw.rect(50, 50, "blue");
    blueSquare.x = -25;
    blueSquare.y = -25;
    marker.addChild(blueSquare);
    marker.x = x
    marker.y = y
    game.addGameItem(marker);
    marker.velocityX = -2;
    marker.rotationalVelocity = -9999999999999999999999999999999;
    marker.onPlayerCollision = function() {
     startLevel()
    };
    marker.onProjectileCollision = function() {
      startLevel()
    }
  }
    
    
  
    function startLevel() {
      // TODO 13 goes below here
    var level = levelData[currentLevel];
    var levelObjects = level.gameItems;
    for(var i = 0; i < levelObjects.length; i++) {
      var gameItem = levelObjects[i];
      var gameItemType = gameItem.type;
      var itemX = gameItem.x;
      var itemY = gameItem.y;

      if(gameItemType === "sawblade"){
        createSawBlade(itemX, itemY)
      }
      else if(gameItemType === "enemy"){
        createEnemy(itemX, itemY)
      }
      else if(gameItemType === "reward"){
        createReward(itemX, itemY)
      }
      else if(gameItemType === "marker"){
        createMarker(itemX, itemY)
      }

    }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
