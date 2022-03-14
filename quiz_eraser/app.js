import { Bubble } from './bubble.js';

class App {
    constructor () {
        // init canvas
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        // resize
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        // variable
        this.mousemoveX = 0;
        this.mousemoveY = 0;

        // object
        this.bubble = new Bubble(this.stageWidth, this.stageHeight);

        // mouse event
        this.canvas.addEventListener('mousemove', this.mouseMove.bind(this));

        // animation
        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize () {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    animate () {
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)

        this.bubble.draw(this.ctx);
    }

    mouseMove (e) {
        this.mousemoveX = e.offsetX;
        this.mousemoveY = e.offsetY;

        this.bubble.move(this.mousemoveX, this.mousemoveY);
    }
}

window.onload = () => {
    new App();
}