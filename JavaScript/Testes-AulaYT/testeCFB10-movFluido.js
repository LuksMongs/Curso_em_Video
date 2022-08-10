var dirX= 0;
var dirY= 0;
var posX= 0;
var posY= 0;
var velo= 1;
var obj= document.getElementById('div1');
var tempo= setInterval(enterFrame, 10);

function inicia(){      //funcao criada pra ser chamada quando o código rodar todo.
    document.addEventListener("keydown", teclaDown)
    document.addEventListener("keyup", teclaUp) //chama a função quando a tecla é liberada (desapertada)
}

function teclaDown(){
    var tecla= event.keyCode;
    if(tecla == 37){
        dirX = dirX-1;
    }else if(tecla == 38){
        dirY = dirY-1;
    }else if(tecla == 39){
        dirX = dirX+1;
    }else if(tecla == 40){
        dirY = dirY+1;
    }
}

function teclaUp(){
    var tecla= event.keyCode;
    if(tecla == 37){
        dirX = 0;
    }else if(tecla == 38){
        dirY = 0;
    }else if(tecla == 39){
        dirX = 0;
    }else if(tecla == 40){
        dirY = 0;
    }
}

function enterFrame(){          //funcao para todo o controle da dv1
    posX= posX+(dirX*velo)
    posY= posY+(dirY*velo)
    obj.style.left= posX+"px"
    obj.style.top= posY+"px"
}


window.addEventListener("load", inicia) //chama a funcao apos carregar toda página
