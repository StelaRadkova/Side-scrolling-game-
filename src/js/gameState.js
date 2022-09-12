function initState(){
    let startX =  Math.floor(Math.random() * 1000);
    let startY = Math.floor(Math.random() * 500);
    const state = {
        player: 'Niki',
        fairy: {
            width: 82,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 10
        },
        cakeStats: {
width: 50,
height: 50,
nextSpawnTimeStamp: 0,
maxSpawnInterval: 3000,
speed: 8
        },
        fireball:{
width: 20,
height: 20
        },
      keys: {
        KeyA: false,
        KeyS: false,
        KeyW: false,
        KeyD: false,
        Space: false
      }
    }
    return state;
}