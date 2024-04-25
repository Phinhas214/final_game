//Phineas Asmelash

class Movement extends Phaser.Scene {

    constructor(){
        super("movementMaker");

        this.bodyX = 400;
        this.bodyY = 480;

        this.rightHandX = this.bodyX;
        this.rightHandY = this.bodyY - 50;

        this.planetX = this.bodyX;
        this.planetY = this.bodyY - 88;
    }

    

    preload() {
        this.load.setPath("./assets/");
        this.load.image("face", "face_g.png");
        this.load.image("planet", "planet02.png");
        this.load.image("body", "body_blueD.png");
        this.load.image("hand", "blue_hand_rock.png");

        this.Akey = null;
        this.Dkey = null;
    }
    
    create() {

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "body");
        my.sprite.face = this.add.sprite(this.bodyX, this.bodyY, "face");
        my.sprite.hand = this.add.sprite(this.rightHandX, this.rightHandY, "hand");
        my.sprite.planet = this.add.sprite(this.planetX, this.planetY, "planet");
        my.sprite.planet.setScale(0.1, 0.1);
        my.sprite.planet.visible = false;

        //Polling definition of key "A", means move left
        this.Akey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        //Polling definition of key "D", means move right
        this.Dkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        //Polling definition of key "SPACE", means emit sprite
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
       my.sprite.planet.y -= 10;


        if(this.Akey.isDown) {
            for(let property in my.sprite) {
                my.sprite[property].x -= 5;
                if(my.sprite[property].x <= 88) {
                    my.sprite[property].x = 88;
                }
            }

        }
        else if(this.Dkey.isDown) {
            for(let property in my.sprite) {
                my.sprite[property].x += 5;
                if(my.sprite[property].x >= 712) {
                    my.sprite[property].x = 712;
                }
            }
        }

        if(this.spaceKey.isDown) {
            my.sprite.planet.y = 400;
            my.sprite.planet.visible = true;
              
        }
    }
        


}