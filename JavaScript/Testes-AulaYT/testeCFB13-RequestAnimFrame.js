var  jogador;
var vel;
var dirX;
var dirY;
var posX;
var posY;
var anima;
var estado=true; //0 (false) parado | 1 (true) movendo

function moverParar(){
    if(estado == true){
        estado = false;
        cancelAnimationFrame(anima);
        jogador.style.backgroundColor="#0f0"
    }else if(estado == false){
        estado = true;
        anima= requestAnimationFrame(game);
        jogador.style.backgroundColor="#00f"
    }
}

function inicia(){
    jogador = document.getElementById("jogador");
    vel= 2;
    dirX=1;
    dirY=0;
    posX=0;
    posy=0;
    
    game();
}

function game(){
    
    posX= posX+(dirX*vel);
    //posY= posY+(dirY*vel);
    jogador.style.left= posX+"px";
    //jogador.style.top= posY+"px"
    anima= requestAnimationFrame(game);

    if(posX > 800){
        dirX=-1;
    } else if(posX < 0){
        dirX=1
    }
}

inicia();

jogador.addEventListener('click', moverParar)



