class Game{

    constructor(){

    }

    getState(){
        var gameStateref=database.ref('gameState')
        gameStateref.on("value",function(data){
            gameState=data.val()
        })

    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }

   async start(){
        if(gameState===0){
            player=new Player()
            var playerCountref=await database.ref("playerCount").once("value")
            if(playerCountref.exists()){
                playerCount=playerCountref.val()
            
            player.getCount()
            }
            form=new Form()
            form.display()
        }
        car1=createSprite(100,200)
        car2=createSprite(200,200)
        car3=createSprite(300,200)
        car4=createSprite(400,200)

        cars=[car1,car2,car3,car4]


    }

    play(){
        form.hide()
      //  text("Game Start",200,50)
        Player.getPlayerInfo();
        if(allplayers!==undefined){
      //          var displayposition=120
      var index=0,x=0,y;
                for(var pl in allplayers){
                    index++;
                    x=x+200
                    y=windowHeight-allplayers[pl].distance
                    cars[index-1].x=x
                    cars[index-1].y=y

                    if(index===player.index){
                       cars[index-1].shapeColor="red";
                       camera.position.x=windowWidth/2
                       camera.position.y=cars[index-1].y
                    }
                  
               //     displayposition+=30
                 //   text(allplayers[pl].name+" : "+allplayers[pl].distance,120,displayposition)
                }
        }
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+=20
            player.update();
        }
        drawSprites();
    }
}