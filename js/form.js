class Form{
    constructor(){
        this.greeting = createElement("h2");
        this.input = createInput();
        this.submit = createButton("Play");
        this.title = createElement("h1");
        this.reset = createButton("Reset");
    }
    hide(){
        this.input.hide();
        this.submit.hide();
        this.greeting.hide();
    }
    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2 - 50,0);

        this.input.elt.placeholder = ("Enter Name");
        this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);

        this.reset.position(displayWidth - 100, 20);

        this.submit.position(displayWidth/2 + 30, displayHeight/2);

        this.submit.mousePressed(()=>{
            this.input.hide();
            this.submit.hide();

            player.name = this.input.value();
            this.greeting.html("Hello " + player.name + "!");
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);

            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        })

        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
            game.reset();
        })
    }
}