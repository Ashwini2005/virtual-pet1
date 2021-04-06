//Create variables here
var dog;
var happyDog;
var database;
var foodS,foodStock;

function preload()
{
	dogImage=loadImage("images/dogImg.png")
  hapDogImage=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  
  dog=createSprite(250,250);
  dog.addImage(dogImage);

  foodStock=database.ref('food')
  foodStock.on("value",readStock)
}


function draw() {  
 background(46,139,87)
 
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(hapDogImage);
 }
  drawSprites();
  //add styles here
  textSize(20)
  fill ("pink")
  text("Food",250,200)


}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  } else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



