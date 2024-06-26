class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.setPath("./assets/");

        // Load tilemap information
        this.load.image("tilesheet_complete", "tilesheet_complete.png");                   // Packed tilemap
        this.load.tilemapTiledJSON("medium_level", "Medium-Level-Combat.tmj");   // Tilemap in JSON
    }

    create() {
        

         // ...and pass to the next Scene
         this.scene.start("final_game");
    }

    // Never get here since a new scene is started in create()
    update() {
    }
}