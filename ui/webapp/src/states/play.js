
import Diver from 'game-objects/diver';

function Play(){}

Play.prototype = {
    create: function(){
        this.game.stage.backgroundColor = 0x00000;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.addMainPlayer();
    },
    
    initMap: function(){
        
    },

    addMainPlayer: function(){
        this.mainPlayer = new Diver(this.game, 70, 70, true);
        this.game.camera.follow(this.mainPlayer.sprite);

        //this.mainPlayer.nickname = this.game.mainPlayerName;
    }
  
};

export default Play;