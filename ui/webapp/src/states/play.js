
import Diver from 'game-objects/diver';

function Play(){}

Play.prototype = {
    create: function(){
        this.game.stage.backgroundColor = 0xFFFFFF;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.addMainPlayer();
    },
    
    initMap: function(){
        
    },

    addMainPlayer: function(){
        this.mainPlayer = new Diver(this.game, 50, 50, true);
        //this.game.camera.follow(this.mainPlayer.sprite);

        //this.mainPlayer.nickname = this.game.mainPlayerName;
    }
  
};

export default Play;