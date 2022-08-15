let state = initState();
let game = initObjects();
game.startScreen.addEventListener('click', startGame);
function startGame(){
game.startScreen.classList.add('hidden');
game.gameScreen.classList.remove('hidden')
}