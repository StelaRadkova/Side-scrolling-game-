function start(state,game){
    game.createFairy(state.fairy)
    window.requestAnimationFrame(gameLoop.bind(null,state,game))
}
function gameLoop(state,game){
window.requestAnimationFrame(gameLoop.bind(null,state,game))
}