import DiverSprite from 'game-sprites/diver-sprite';

var Diver = function(game, x, y, isMainPlayer) {
    this.configure(game, isMainPlayer);
    this.setupSprite(x, y);
};

Diver.prototype.configure = function(game, isMainPlayer){
    this.game = game;
    this.isMainPlayer = isMainPlayer;
};

Diver.prototype.setupSprite = function(x, y){
    this.sprite = new DiverSprite(this.game, x, y, this.isMainPlayer);
    this.game.add.existing(this.sprite);
    this.sprite.floating();
};

Diver.prototype.destroy = function(){
  this.sprite.destroy();
};

export default Diver;