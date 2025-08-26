$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 620, 100, 10, "maroon");
    createPlatform(100, 500, 100, 10, "maroon");
    createPlatform(400, 400, 100, 10, "maroon");
    createPlatform(400, 300, 100, 10, "maroon");
    createPlatform(500, 100, 10, 650, "black");
    createPlatform(200, 200, 100, 10, "maroon");
    createPlatform(400, 100, 100, 10, "maroon");
    createPlatform(100, 0, 10, 600, "black");
    createPlatform(510, 200, 100, 10, "indigo");
    createPlatform(600, 300, 600, 10, "indigo");
    createPlatform(510, 400, 100, 10, "indigo");
    createPlatform(1200, 500, 30, 10, "indigo");
    createPlatform(900, 500, 100, 10, "green");




    // TODO 3 - Create Collectables
    createCollectable("max", 425, 325);
    createCollectable("diamond", 525, 325);
    createCollectable("steve", 925, 425);



    
    // TODO 4 - Create Cannons
    createCannon("top", 400, 1200);
    createCannon("top", 700, 700);
    createCannon("top", 900, 700);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
