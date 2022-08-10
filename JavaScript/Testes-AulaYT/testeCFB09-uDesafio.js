
//botoes para ligar ALTERACAO DE COR e MOVIMENTO e outro pra desligar.

//CORES
var caixa1 = document.getElementById('caixa1')
var btniniciar = document.getElementById('iniciar')
var time = 0;

function mudaCor(){

    let corR= Math.floor(Math.random()*255);
    let corG= Math.floor(Math.random()*255);
    let corB= Math.floor(Math.random()*255);
    
    caixa1.style.backgroundColor="rgb("+corR+','+corG+","+corB+")"  
}

function iniciarCores(){
    time= setInterval(mudaCor,1000)
    return time;
}

btniniciar.addEventListener('click', iniciarCores)
document.getElementById('parar').addEventListener('click', function(){
    clearInterval(time); 
    caixa1.style.backgroundColor='#000';
});


//MOVIMENTO
var posicaox= 0;
var posicaoy= 80;
var tecla = 0;

function movimento (){
    document.addEventListener("keydown", movimento)//comando é executado quando chamado pelo "click" na caixa1
    tecla = event.keyCode;
    if(tecla == 37){
        posicaox= posicaox-10
        caixa1.style.left= posicaox+"px"
        caixa1.style.backgroundColor="#0f0";
    }else if(tecla == 39){
        posicaox= posicaox+10
        caixa1.style.left= posicaox+"px";
    }else if(tecla == 38){
        posicaoy = posicaoy-10
        caixa1.style.top= posicaoy+"px"
    }else if(tecla == 40){
        posicaoy = posicaoy+10
        caixa1.style.top= posicaoy+"px"
    }else if(tecla == 13){
        alert('Movimento Removido!');
        document.removeEventListener('keydown', movimento);
        caixa1.style.backgroundColor='#fff';
    }
    caixa1.innerHTML= posicaox+"<br>"+posicaoy;
}

document.addEventListener("keydown", movimento) //esse comando é executado ao rodar o código
caixa1.addEventListener('click', movimento)