function start(state, game) {
  game.createFairy(state.fairy);
  window.requestAnimationFrame(timestamp => gameLoop(state, game,timestamp));
}
function gameLoop(state, game,timestamp) {
  const { fairy } = state;
  const { fairyElement } = game;
  game.scoreScreen.textContent = `${state.score} pts.`
  modifyFairyPosition(state, game);
  if(state.keys.Space){
    if(timestamp > state.fireball.nextSpawnTimeStamp){
        game.createFireBall(fairy, state.fireball);
        state.fireball.nextSpawnTimeStamp = timestamp + Math.random() *state.fireball.maxSpawnInterval;
    }
   
  }

  if(timestamp > state.cakeStats.nextSpawnTimeStamp){
    game.createCake(state.cakeStats);
    state.cakeStats.nextSpawnTimeStamp = timestamp + state.cakeStats.maxSpawnInterval
  }
  let cakeElements =  document.querySelectorAll('.cake');
  cakeElements.forEach(cake =>{
    let posX = parseInt(cake.style.left);
    if(detectColision(fairyElement, cake)){
        state.gameOver = true; 
    }
    if(posX > 0){
cake.style.left = posX - state.cakeStats.speed + 'px';
    }else{
        cake.remove()
    }
    document.querySelectorAll('.fireball').forEach(fireball => {
        let posX = parseInt(fireball.style.left);
        cakeElements.forEach(cake =>{
            if (detectColision(cake, fireball)){
                state.score += state.killScore;
                cake.remove();
                fireball.remove()
            }
        })
        if(posX > game.gameScreen.offsetWidth){
fireball.remove();
        }
        fireball.style.left = posX + state.fireball.speed + 'px';
    })
 })

  fairyElement.style.left = fairy.posX + "px";
  fairyElement.style.top = fairy.posY + "px";
 if(state.gameOver){
    alert(`Game over - You had ${state.score} pts`)
}else{
     window.requestAnimationFrame(gameLoop.bind(null, state, game));
state.score += state.scoreRate;
 }
}
function modifyFairyPosition(state, game){
    const { fairy } = state;
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
}

function detectColision(objectA, objectB){
let first = objectA.getBoundingClientRect();
let second = objectB.getBoundingClientRect();
let hasCollision = !(first.top > second.bottom || first.bottom < second.top || first.right < second.left || first.left > second.right);
return hasCollision;
}
