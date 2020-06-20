class Player{
    constructor(){
    }
    getCount(){
        var getCountREF = database.ref("playerCount").on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }

    update(name){
        var index = "Player" + playerCount;
        database.ref(index).set({
            name : name
        })
    }
}