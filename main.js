const canvas = document.querySelector("#game");

const ctx = canvas.getContext("2d");

const i = new InputController();

const game = new Game(canvas, ctx, i);

function update(){
    game.update();
    
    window.requestAnimationFrame(update);
}