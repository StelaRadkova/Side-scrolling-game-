function start(state, game) {
  game.createFairy(state.fairy);
  window.requestAnimationFrame(gameLoop.bind(null, state, game));
}
function gameLoop(state, game) {
  const { fairy } = state;
  const { fairyElement } = game;
  if (state.keys.KeyD) {
    fairy.posX += fairy.speed;
  }
  if (state.keys.KeyA) {
    fairy.posX -= fairy.speed;
  }
 if (state.keys.KeyW) {
    fairy.posY -= fairy.speed;
  }
  if (state.keys.KeyS) {
    fairy.posY += fairy.speed;
  }
  fairyElement.style.left = fairy.posX + "px";
  fairyElement.style.top = fairy.posY + "px";
 
  window.requestAnimationFrame(gameLoop.bind(null, state, game));
}
