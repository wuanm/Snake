let snake;
let food;
let tamano = 15;
let cols, rows;
let yacomio=false;
let reiniciar=false;
var valor;
const eltotal=document.getElementById("record");
const boton =document.getElementById("boton");
const contenedor=document.getElementById("main");


function setup() {
  // creamos variable y la introducimos el cava en el div "contenedor"
  var canvas=createCanvas(375, 500);
  canvas.parent("contenedor");
  cols = (width / tamano);
  rows = (height / tamano);
  frameRate(10);
  snake =new serpiente();
  food=new Comida();


  
}


function draw() {


  background(102,205,170);
  snake.actualizaSerpiente();
  snake.mostrarSerpiente();
  food.dibujoManzana();


  // si la serpiente comio
  if(comio()){
    food.dibujoManzana();
  }

  
 elBoton();
 
  
  //si sale de pantalla
  if(termninarJuego()){
    background(0);
    noLoop();
    escribe();
  
  };

  
  


        
  }

//funcion para el uso del teclado
function keyPressed(){
  //usamos la funcion para reiniciar el juego
  if(!isLooping()){
    reiniciarJuego();
    //pasamos los puntos al record es son mayor que lo que hay en el record
   var valorActual=valor.innerHTML;
    var haytotal=eltotal.innerHTML;
    if(valorActual >haytotal){
      eltotal.innerHTML=valorActual;
    }
    //aqui ponemos en cerro el contador de comida
    valor.innerHTML=0; 
    
  }
  //uso de las teclas para el movimiento
  if(keyCode == UP_ARROW){
    snake.modificarDireccion(0,-1);
  } else if(keyCode ==DOWN_ARROW){
    snake.modificarDireccion(0,1);
  } else if(keyCode ==RIGHT_ARROW){
    snake.modificarDireccion(1,0);
  }else if(keyCode == LEFT_ARROW){
    snake.modificarDireccion(-1,0);
  }else if(key == "x"){
    location.reload();
  }
}


//funcion cuando la serpiente come.
function comio(){
  //copiamos la ultima posicion
  let head =snake.body[snake.body.length-1];
  if(head.x=== food.X && head.y ===food.Y){
    food.X=floor(random(cols));
    food.Y =floor(random(rows));
    creecer();
    contadorPuntos();

    
    return true;
    
    
  }
  return false;

};

//funcion en la que va aumentando la cola cuando come.
function creecer(){
  let head =snake.body[snake.body.length -1].copy();
  snake.body.push(head);

};

//fin del juego al salir de la pantalla.
function termninarJuego(){
  let head=snake.body[snake.body.length-1];

  for(let i=0; i<snake.body.length-1;i++){
    let segmento= snake.body[i];
   if(segmento.x+15 === head.x && segmento.y+15 ===head.y){
      return true; 
    }
  }
  if (head.x <-1 || head.x >(cols) || head.y < -1 || head.y >(rows)){
    return true;
  
  }
  return false;
};

//funcion para escribir en pantalla
function escribe(){
  textSize(35);
  fill(250);
  text("Juego Terminado", 50,250);
  textSize(15);
  text("Enter para continuar",100,280);
  text("'X' para salir",100,310);
}
  // funcion para ir sumando los puntos en la pizarra.
function contadorPuntos(){
  var cont=1;
  valor=document.getElementById("total");
  var valorActual=valor.innerHTML;
  var punto=parseInt(valorActual)+ cont;
  valor.innerHTML=punto;
};

//funcion para reiniciar el juego
function reiniciarJuego(){
  background(102,205,170);
  snake=new serpiente();
  food=new Comida();
  loop();
}

//funcion del botton
function elBoton(){
  boton.addEventListener("click",() =>{
    document.querySelector(".main").style.display="none";
    document.querySelector(".contenedor").style.display="grid";
  });
}

//funcion para usar el touch
function touchStarted() {
  // Uso del toque para cambiar la dirección de la serpiente
  const touchX = touches[0].clientX;
  const touchY = touches[0].clientY;

  const deltaX = touchX - pwinMouseX;
  const deltaY = touchY - pwinMouseY;

  // Lógica para determinar la dirección del movimiento de la serpiente
  if (abs(deltaX) > abs(deltaY)) {
    // Movimiento horizontal
    if (deltaX > 0) {
      // Movimiento a la derecha
      snake.modificarDireccion(1, 0);
    } else {
      // Movimiento a la izquierda
      snake.modificarDireccion(-1, 0);
    }
  } else {
    // Movimiento vertical
    if (deltaY > 0) {
      // Movimiento hacia abajo
      snake.modificarDireccion(0, 1);
    } else {
      // Movimiento hacia arriba
      snake.modificarDireccion(0, -1);
    }
  }

  // Resto del código para reiniciar el juego y actualizar los puntos en el récord
  if (!isLooping()) {
    reiniciarJuego();
    var valorActual = valor.innerHTML;
    var haytotal = eltotal.innerHTML;
    if (valorActual > haytotal) {
      eltotal.innerHTML = valorActual;
    }
    valor.innerHTML = 0;
  }
};






















  
  

  
 
  
