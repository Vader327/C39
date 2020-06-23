class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
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

    update(){
        var index = "Players/player" + this.index;
        database.ref(index).set({
            name : this.name,
            distance : this.distance
        })
    }

    static getPlayerInfo(){
        var playerInfoREF = database.ref("Players").on("value",function(data){
            allPlayers = data.val();
        })
    }
}