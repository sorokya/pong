import Config from './config'
import Vector from './vector';
import Util from './util';

export default class Ball {
    constructor() {
        this.reset();
    }
    reset() {
        this.position = new Vector(Config.GAME_WIDTH / 2 - Config.BALL_SIZE / 2,
                                   Config.GAME_HEIGHT / 2 - Config.BALL_SIZE / 2);
        this.angle = 90;
    }
    render(ctx, lagOffset) {
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, Config.BALL_SIZE, 0, 2 * Math.PI);
        ctx.fill();

        // TODO: use lagOffset
    }
    update() {
        let distanceY = Config.BALL_VELOCITY * 
            Math.cos(Util.DegToRad(this.angle));
        let distanceX = Config.BALL_VELOCITY * 
            Math.sin(Util.DegToRad(this.angle));
        this.position.x += distanceX;
        this.position.y += distanceY;
    }
}