var dog,Hdog,foods,foodStock;
var database;

function preload()
{
	//load images here
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database();

  dog = createSprite(250,250,50,50);
  dog.addImage("images/dogImg1");

  foodStock = database.ref('food')
  foodStock.on('value',readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown("UP_ARROW")){
    writeStock(foods)
    dog.addImage("images/dogImg1");
  }


  drawSprites();
  textSize(50)
  fill("white")
  stroke("black")


}

function readStock(data){
  foods=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

