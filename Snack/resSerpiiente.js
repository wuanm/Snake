let cuerpoSnake=[]
let Cabeza=[]
let cp=0;

class serpiente {
    constructor(){
        this.x=300;
        this.y=380;
        this.x2=15;
        this.y2=15;

        
    }
    //Dibujo de cabeza de serpiente
    dibujoSerpiente(){
        if (cuerpoSnake.length ==0){
            fill(255,255,255)
            rect(this.x,this.y,this.x2,this.y2)
        }else{
            for (let i=0;i<cuerpoSnake.length;i++){
                fill(255,255,255)
                cp=cuerpoSnake[i][i];
                rect(cp[0],cp[1],this.x2,this.y2)
                console.log("hola mundo")
            }
        }
    }

    //movimiento
    moverserpiente(x,y){
        this.x+=x;
        this.y+=y;
      
    }

    //creamos pieza al cuerpo de la serpiente
    crearCuerpo(){
        Cabeza.push([this.x,this.y])
        cuerpoSnake.push(Cabeza)
       
        
    }        

    //movimiento
    moverserpiente(x,y){
        this.x+=x;
        this.y+=y;
    }
    
   
}

copia DOMStringListclass serpiente {
    constructor() {
      this.x = 300;
      this.y = 380;
      this.x2 = 15;
      this.y2 = 15;
      this.velX = 0;
      this.velY = 0;
      this.cuerpoSnake = []; // array para guardar las piezas del cuerpo de la serpiente
      this.longitudSerpiente = 1; // longitud inicial del cuerpo de la serpiente
    }
  
    //Dibujo de cabeza y cuerpo de serpiente
    dibujoSerpiente() {
      // Dibuja la cabeza de la serpiente
      fill(255, 255, 255);
      rect(this.x, this.y, this.x2, this.y2);
  
      // Dibuja las piezas del cuerpo de la serpiente
      for (let i = 0; i < this.cuerpoSnake.length; i++) {
        fill(255, 255, 255);
        rect(
          this.cuerpoSnake[i].x,
          this.cuerpoSnake[i].y,
          this.x2,
          this.y2
        );
      }
    }
  
    // Movimiento de la serpiente
    moverSerpiente(velX,velY) {
      // Actualiza la posición de la cabeza de la serpiente
      this.x += this.velX;
      this.y += this.velY;
  
      // Actualiza la posición de las piezas del cuerpo de la serpiente
    /*  for (let i = this.cuerpoSnake.length - 1; i > 0; i--) {
        this.cuerpoSnake[i].x = this.cuerpoSnake[i - 1].x;
        this.cuerpoSnake[i].y = this.cuerpoSnake[i - 1].y;
      }
  
      // Actualiza la posición de la primera pieza del cuerpo de la serpiente
      if (this.cuerpoSnake.length > 0) {
        this.cuerpoSnake[0].x = this.xInicial;
        this.cuerpoSnake[0].y = this.yInicial;
      }*/
    }
    /*
      // Verifica si la serpiente chocó contra una pared
      if (this.x < 0 || this.x > width - this.x2 || this.y < 0 || this.y > height - this.y2) {
        // Reinicia la posición y longitud de la serpiente
        this.x = 300;
        this.y = 380;
        this.velX = 0;
        this.velY = 0;
        this.cuerpoSnake = [];
        this.longitudSerpiente = 1;
      }
  
      // Verifica si la serpiente chocó contra su propio cuerpo
      for (let i = 0; i < this.cuerpoSnake.length; i++) {
        if (this.x == this.cuerpoSnake[i].x && this.y == this.cuerpoSnake[i].y) {
          // Reinicia la posición y longitud de la serpiente
          this.x = 300;
          this.y = 380;
          this.velX = 0;
          this.velY = 0;
          this.cuerpoSnake = [];
          this.longitudSerpiente = 1;
        }
      }
    }
  
    // Añade una pieza al cuerpo de la serpiente
    */
}