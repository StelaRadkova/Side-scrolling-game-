function initObjects(){
const startScreen = document.querySelector('.start-screen');
const gameScreen = document.querySelector('.game-screen');

return{
    startScreen,
    gameScreen,
   createFairy(initialState){
    let fairyElement = document.createElement('div');
    fairyElement.classList.add('fairy');
    fairyElement.style.height = initialState.height + 'px';
    fairyElement.style.width = initialState.width + 'px';
    fairyElement.style.left = initialState.posX + 'px';
    fairyElement.style.top = initialState.posY + 'px';
    this.fairyElement = fairyElement;
    gameScreen.appendChild(fairyElement)
    return fairyElement;
},
createCake(stats){
    const cakeElement = document.createElement('div');
    cakeElement.classList.add('cake');
    cakeElement.style.width = stats.width + 'px';
    cakeElement.style.height = stats.height + 'px';
    cakeElement.style.left = gameScreen.offsetWidth - stats.width + 'px';
    cakeElement.style.top = Math.floor(Math.random() * gameScreen.offsetHeight - stats.height) + 'px'
    gameScreen.appendChild(cakeElement)
}
}
}