var ball;
var database,form,game,player;
var gameState=0;
var playerCount=0;
var bgimg;
var allplayers;
var car1,car2,car3,car4,cars;

function preload(){
    bgimg=loadImage("smash-karts.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    database=firebase.database()
    game= new Game()
    game.getState()
    game.start()
    console.log(windowWidth)
    console.log(windowHeight)
}

function draw(){

    if(playerCount===4){
        game.update(1)
    }

    if(gameState===1){
        clear();

        game.play();
    }
 }
