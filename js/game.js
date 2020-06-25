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

        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);

        cars = [car1,car2,car3,car4];
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Starts!", 120, 100);
        Player.getPlayerInfo();

        if(allPlayers != undefined){
            var index = 0;
            var x = 0;
            var y = 0;

            for(var player_index in allPlayers){
                index+=1;
                x += 200;
                y = displayHeight - allPlayers[player_index].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                if(index === player.index){
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index - 1].y;
                }
            }
        }

        if(keyIsDown(UP_ARROW) && player.index != null){
            player.distance+=50;
            player.update();
        }

        drawSprites();
    }
}