class Game{
    constructor(){
    }

    getState(){
        var getStateREF = database.ref("gameState").on("value",function(data){
            gameState = data.val();
        });
    }

    update(state){
        database.ref("/").update({
            gameState : state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Starts!", 120, 100);
        Player.getPlayerInfo();
        if(allPlayers != undefined){
            var Ypos = 130;
            for(var player_index in allPlayers){
                if(player_index === "player" + player.index){fill("red")}
                else{fill("black")}

                textSize(15);
                text(player.name + ": " + player.distance, 120, Ypos);
                Ypos+=20;
            }
        }

        if(keyIsDown(UP_ARROW) && player.index != null){
            player.distance+=50;
            player.update();
        }
    }
}