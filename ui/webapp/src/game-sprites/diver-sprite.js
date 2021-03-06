var DiverSprite = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'sprite');
    this.setupAnimations();
};

DiverSprite.prototype = Object.create(Phaser.Sprite.prototype);
DiverSprite.prototype.constructor = DiverSprite;


DiverSprite.prototype.setupAnimations = function() {
    this.anchor.setTo(0.5, 0.5);

    this.animations.add('swimming', [
        "swimming1.png",
        "swimming2.png",
        "swimming3.png",
        "swimming4.png",
        "swimming5.png"
    ], 60, false);

    this.animations.add('prepareMovement', [
        "floatingToSwimming1.png",
        "floatingToSwimming2.png"
    ], 60, true);

    this.animations.add('endMovement', [
        "swimmingToFloating1.png",
        "swimmingToFloating2.png"
    ], 60, true);

    this.animations.add('floating', [
        "floating1.png",
        "floating2.png",
        "floating3.png",
        "floating4.png",
        "floating5.png"
    ], 60, true);
};


DiverSprite.prototype.swimming = function(){
    this.animations.play("swimming", 6, true);
};

DiverSprite.prototype.floating = function(){
    this.scale.x = 1;
    this.animations.play("floating", 6, true);
};

DiverSprite.prototype.stopAnimation = function(){
    this.animations.stop();
};

DiverSprite.prototype.prepareMovement = function(){
    this.animations.play("prepareMovement", 6, false);
};

DiverSprite.prototype.endMovement = function(){
    this.animations.play("endMovement", 6, false);
};

export default DiverSprite;