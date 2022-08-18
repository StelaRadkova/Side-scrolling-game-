function initState(){
    const state = {
        player: 'Niki',
        fairy: {
            width: 82,
            height: 100,
            startX: Math.floor(Math.random() * 1000),
            startY: 300
        }
      
    }
    return state;
}