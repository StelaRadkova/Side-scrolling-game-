function initObjects(){
const startScreen = document.querySelector('.start-screen');
const gameScreen = document.querySelector('.game-screen');
//const fairy = document.querySelector('.fairy');
return{
    startScreen,
    gameScreen,
   createFairy(initialState){
    let fairyElement = document.createElement('div');
    fairyElement.classList.add('fairy');
    fairyElement.style.height = initialState.height +'px';
    fairyElement.style.width = initialState.width +'px';
    fairyElement.style.left = initialState.startX +'px';
    fairyElement.style.top = initialState.startY +'px';
    this.fairyElement = fairyElement;
    gameScreen.appendChild(fairyElement)
    return fairy
}
}
}