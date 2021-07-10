//variables pour créer les sprites
var nebula, vaisseau;
//variables pour les images
var nebulaImg, vaisseauImg,thrustImg;

//dimension zone de jeu
var LARGEUR = 400;
var HAUTEUR = 400;

// variables états de jeu
var vie, score, best;
vie = 3;
score = 0;
best = 0;

function preload(){
  //télécharger les images ici
  nebulaImg = loadImage("nebula.png");
  vaisseauImg = loadImage("spaceship.png");
  thrustImg = loadImage("thrust.png");
}

function setup(){
  createCanvas(LARGEUR,HAUTEUR)
  
  nebula = createSprite(200,200,200,200);
  nebula.addImage(nebulaImg);
  nebula.scale = 1.2;
  
  vaisseau = createSprite(200,200,20,20);
  vaisseau.addAnimation("spaceship",vaisseauImg);
  vaisseau.addAnimation("thrust",thrustImg);
  vaisseau.scale = 0.15;
  vaisseau.debug = false;
  vaisseau.setCollider("rectangle",0,0,450,350);

}

function draw(){
  drawSprites();
  
  
  
  
}