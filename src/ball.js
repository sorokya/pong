import Config from './config'
import Vector from './vector';

export default class Ball {
    constructor() {
        this.reset();
    }
    reset() {
        this.position = new Vector(Config.GAME_WIDTH / 2 - Config.BALL_SIZE / 2,
                                   Config.GAME_HEIGHT / 2 - Config.BALL_SIZE / 2);
    }
    render(ctx, lagOffset) {
        ctx.fillStyle = '#fff';
        ctx.arc(this.position.x, this.position.y, Config.BALL_SIZE, 0, 2 * Math.PI);
        ctx.fill();
    }
    update(delta) {

    }
}