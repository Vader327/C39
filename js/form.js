class Form{
    constructor(){
        this.greeting = createElement("h2");
        this.input = createInput();
        this.submit = createButton("Play");
        this.title = createElement("h1");
    }
    hide(){
        this.input.hide();
        this.submit.hide();
        this.greeting.hide();
    }
    display(){
        this.title.html("Car Racing Game");
        this.title.position(100,0);

        this.input.elt.placeholder = ("Enter Name");
        this.input.position(130, 160);

        this.submit.position(250,200);

        this.submit.mousePressed(()=>{
            this.input.hide();
            this.submit.hide();

            player.name = this.input.value();
            this.greeting.html("Hello " + player.name + "!");
            this.greeting.position(130,160);

            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        })
    }
}