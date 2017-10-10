
import Diver from 'game-objects/diver';

function Play(){}

Play.prototype = {
    create: function(){
        this.game.stage.backgroundColor = 0x3687BE;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.background = this.add.tileSprite(0, 0, this.world.width, 241, 'wave');
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.addMainPlayer();
    },
    
    initMap: function(){
        
    },

    addMainPlayer: function(){
        this.mainPlayer = new Diver(this.game, 70, 250, true);
        this.game.camera.follow(this.mainPlayer.sprite);

        //this.mainPlayer.nickname = this.game.mainPlayerName;
    },

    update :function() {
       if (this.cursors.right.isDown) {
           this.mainPlayer.move();
       } else {
            this.mainPlayer.stop();
       }
       this.background.tilePosition.x -= 1;
       if (this.mainPlayer.moving) {
           this.background.tilePosition.x -= this.mainPlayer.velocity;
       }
        //}
    }
  
};

export default Play;