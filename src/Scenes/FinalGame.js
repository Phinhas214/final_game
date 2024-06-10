


class FinalGame extends Phaser.Scene {
    constructor() {
        super("final_game");
    }

    preload() {
    }
    
    init() {
        this.TILESIZE = 8;
        this.SCALE = 1.0;
        this.TILEWIDTH = 50;
        this.TILEHEIGHT = 35;
    }

    create() {
        // Create a new tilemap which uses 32x32 tiles, and is 50 tiles wide and 35 tiles tall
        this.map = this.add.tilemap("medium_level", this.TILESIZE, this.TILESIZE, this.TILEHEIGHT, this.TILEWIDTH);

        // Add a tileset to the map
        this.tileset = this.map.addTilesetImage("tilesheet_complete", "tilesheet_complete");

        // Create the layers
        this.floor = this.map.createLayer("Floor", this.tileset, 0, 0);
        this.battleGround = this.map.createLayer("BattleGround", this.tileset, 0, 0);
        this.decorations = this.map.createLayer("Decorations", this.tileset, 0, 0);

        // Camera settings
        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
        this.cameras.main.setZoom(this.SCALE);

    }

    update() {

    }
}
