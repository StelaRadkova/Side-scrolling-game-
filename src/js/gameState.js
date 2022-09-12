function initState(){
    let startX =  Math.floor(Math.random() * 1000);
    let startY = Math.floor(Math.random() * 500);
    const state = {
        player: 'Niki',
        gameOver: false,
        score: 0,
        scoreRate: 1,
        killScore: 1000,
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
height: 20,
speed: 12,
nextSpawnTimeStamp: 0,
maxSpawnInterval: 500
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