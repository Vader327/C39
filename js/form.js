class Form{
    constructor(){
    }
    display(){
        var title = createElement("h1");
        title.html("Car Racing Game");
        title.position(100,0);

        var input = createInput();
        input.elt.placeholder = ("Enter Name");
        input.position(130, 160);

        var submit = createButton("Play");
        submit.position(250,200);

        submit.mousePressed(function(){
            input.hide();
            submit.hide();
            var greeting = createElement("h2");
            greeting.html("Hello " + input.value() + "!");
            greeting.position(130,160);

            playerCount+=1;
            player.update(input.value());
            player.updateCount(playerCount);
        })
    }
}