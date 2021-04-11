class Form{
    constructor(){
        this.title=createElement("h1")
        this.input=createInput("enter your name")
        this.button=createButton('Play')
        this.greeting=createElement("h3")



    }

    hide(){
        this.title.hide()
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }

    display(){
        this.title.html("car racing game")
        this.title.position(130,50)
        this.input.position(130,150)
        this.button.position(250,200)

       
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount++
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("hello "+player.name+" welcome! to the game . lets wait for other players to join")
            this.greeting.position(130,160)
            
        })
    }
}