import DiverSprite from 'game-sprites/diver-sprite';

class Diver {
    constructor(game, x, y, isMainPlayer) {
        this.configure(game, isMainPlayer);
        this.setupSprite(x, y);
    }
    configure(game, isMainPlayer) {
        this.game = game;
        this.moving = false;
        this.isMainPlayer = isMainPlayer;
        this.velocity = 1;
    }
    setupSprite(x, y){
        this.sprite = new DiverSprite(this.game, x, y, this.isMainPlayer);
        this.game.add.existing(this.sprite);
        this.sprite.floating();
    }
    prepareMovement() {
        this.sprite.prepareMovement();
    }
    endMovement() {
        this.sprite.endMovement();
    }
    move() {
        if (!this.moving) {
            this.prepareMovement();
            this.moving = true;
            setTimeout(() => {
                this.sprite.swimming();        
            }, 200);
        }
    }
    stop() {
        if (this.moving) {
            this.endMovement();
            this.moving = false;
            setTimeout(() => {
                this.sprite.floating();        
            }, 200);
        }
    }
    destroy() {
        this.sprite.destroy();
    }

    setPosition(x, y) {
        this.sprite.position.x = x;
        this.sprite.position.y = y;
    }
}


export { Diver as default }