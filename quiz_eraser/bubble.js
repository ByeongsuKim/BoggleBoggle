export class Bubble {
    constructor (width, height) {
        this.width = width;
        this.height = height;

        this.click_x = this.width / 2;
        this.click_y = this.height / 2;

        this.x = 0;
        this.y = 0;

        this.speed = 5;
    }

    draw (ctx) {
        this.x  = this.x + ((this.click_x - this.x) * this.speed * 0.01);
        this.y  = this.y + ((this.click_y - this.y) * this.speed * 0.01);

        ctx.beginPath();
        ctx.arc(this.x, this.y, 100, 0, Math.PI * 2, true);
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

    move (click_x, click_y) {
        this.click_x = click_x;
        this.click_y = click_y;
    }
}