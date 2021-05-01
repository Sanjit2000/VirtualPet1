//Create variables here
//var dog, happyDog, database, foodS, foodStock
var dogImg,happyDogImg,dogSprite,happyDogSprite

var dog, happyDog, database, foodS, foodStock


function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  happyDogImg=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);

  database=firebase.database();

  dogSprite=createSprite(200, 350, 10,10);
	dogSprite.addImage(dogImg)
	dogSprite.scale=0.4

  happyDogSprite=createSprite(200, 350, 10,10);
  happyDogSprite.addImage(happyDogImg)
  happyDogSprite.visible = false;
	happyDogSprite.scale=0.4

  var foodStock = database.ref('Food');
  foodStock.on("value", readStock);
 


}


function draw() {  

background(46, 139, 87)


if (keyWentDown(UP_ARROW)) {
  writeStock(foodS)
  dogSprite.addImage(happyDogImg)
  
}

 

  drawSprites();
  //add styles here
    text()
  fill("red")
  text("Note: Press UP_ARROW key to Feed Drago Milk",20,35); 
  fill("red")
  text("food left :"+foodS,200,150); 
 
}


function readStock(data){

foodS=data.val()

}


function writeStock(x) {
  database.ref('/').update({
    Food:x-1
  })

}





