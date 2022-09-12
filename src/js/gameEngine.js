function start(state, game) {
  game.createFairy(state.fairy);
  window.requestAnimationFrame(gameLoop.bind(null, state, game));
}
function gameLoop(state, game) {
  const { fairy } = state;
  const { fairyElement } = game;
  if (state.keys.KeyD) {
    fairy.posX = Math.min(fairy.posX + fairy.speed, game.gameScreen.offsetWidth - fairy.width);
  }
  if (state.keys.KeyA) {
    fairy.posX = Math.max(fairy.posX - fairy.speed, 0);;
  }
 if (state.keys.KeyW) {
    fairy.posY = Math.max(fairy.posY - fairy.speed, 0);
  }
  if (state.keys.KeyS) {
    fairy.posY = Math.min(fairy.posY + fairy.speed, game.gameScreen.offsetHeight - fairy.height);
  }
  fairyElement.style.left = fairy.posX + "px";
  fairyElement.style.top = fairy.posY + "px";
 
  window.requestAnimationFrame(gameLoop.bind(null, state, game));
}
