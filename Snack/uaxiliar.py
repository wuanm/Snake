class serpiente {
  constructor(){
    //...
    this.posiciones = [[this.x, this.y]]; //matriz que almacena las posiciones anteriores de la cabeza
  }
  
  //...
  
  moverserpiente(x, y){
    //...
    //guarda la posición anterior de la cabeza en la matriz de posiciones
    this.posiciones.unshift([this.x, this.y]);
    this.posiciones.pop();
  }
  
  crearCuerpo(){
    const ultimaPos = this.posiciones[this.posiciones.length - 1]; //posición de la última pieza del cuerpo
    cuerpoSnake.push([ultimaPos[0], ultimaPos[1], this.x2, this.y2]); //agrega una nueva pieza del cuerpo detrás de la última pieza
  }
}

function draw() {
  //...
  snake.dibujoSerpiente();
  snake.moverserpiente(velocidadx,velocidady);
  snakeBody();
  //...
}

function snakeBody(){
  if(comio){
    snake.crearCuerpo();
    cuerpoSnake.forEach((element, index) => {
      fill(255,255,255);
      rect(element[0],element[1],element[2],element[3]);
      //actualiza la posición de cada pieza del cuerpo usando la posición anterior de la pieza que está delante de ella en la matriz
      if (index > 0) {
        const posAnterior = snake.posiciones[index - 1];
        element[0] = posAnterior[0];
        element[1] = posAnterior[1];
      }
    });
  }
}
// esta es la mas acertada.
//poner ptes a la snack
function snakeBody(){  
  for(i=0; i<cuerpoSnake.length;i--) {
    fill(255,255,255)
    rect(cuerpoSnake[i][0],cuerpoSnake[i][1],cuerpoSnake[i][2],cuerpoSnake[i][3])
    if (i > 0) {
      console.log("hola mundo")
      console.log(cuerpoSnake[i][0])   //por  que qui se mantiene la misma posicion aun cunado la cabeza esta moviendose?
      const posAnterior = cuerpoSnake[i-1] ;
      cuerpoSnake[i][0] = posAnterior[0];
      cuerpoSnake[i][1] = posAnterior[1];
    }
  };


//skech
let velocidadx=0;
let velocidady=0;
let comio=false;

function setup() {
  // creamos variable y la introducimos el cava en el div "contenedor"
  var canvas=createCanvas(375, 500);
  canvas.parent("contenedor");

  snake= new serpiente();
  manzana=new Comida();
  

}

function draw() {
  background(102,205,170);
  snake.dibujoSerpiente();
  snake.moverserpiente(velocidadx,velocidady)
  //snakeBody();
  manzana.dibujoManzana();
  comerManzana();
  
}
// Funcion que activa el movimiento de la serpiente
function keyPressed(){
  if(key =="ArrowRight"){
    console.log("hola mundo")
    velocidadx=2;
    velocidady=0
  }else if (key=="ArrowLeft"){
    velocidadx=-2;
    velocidady=0

  }else if (key=="ArrowUp"){
    velocidady=-2;
    velocidadx=0

  }else if (key=="ArrowDown"){
    velocidady=2;
    velocidadx=0;
  }
}

//snack se come la manzana (colisión).
function comerManzana(){
  comio=false
  if (snake.x < manzana.cX + manzana.cD && 
      snake.x + snake.x2 > manzana.cX && 
      snake.y-5 < manzana.cY + manzana.cD && 
      snake.y + snake.y2 > manzana.cY) {
    manzana.cX = random(10, 360);
    manzana.cY = random(10, 470);
    comio=true;
    
     // Actualizar el cuerpo de la serpiente
    if (comio) {
      console.log("Hola mundo")
      snake.crearCuerpo();
     
    }
  }
}

//poner partes a la snack
function snakeBody(){  
  console.log("vacio")
  
}