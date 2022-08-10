var objdv1 = document.getElementById('dv1')
var btnIniciar = document.getElementById("btnIniciar")
var btnParar = document.getElementById('btnParar')
var tempo;
function mudaCor(){
    var corR= Math.floor(Math.random()*255) ;
    var corG= Math.floor(Math.random()*255);
    var corB= Math.floor(Math.random()*255); 
    return objdv1.style.backgroundColor="rgb("+corR+","+corG+","+corB+")";
}

objdv1.addEventListener("click", mudaCor)

setTimeout(mudaCor,1000) //chama funcao uma vez apenas

function iniciar(){
   tempo= setInterval(mudaCor,500) //chama funcao a cada 2s (2000 milisegundos)
}

function parar(){
    clearInterval(tempo)
}

btnIniciar.addEventListener("click", iniciar)
btnParar.addEventListener("click", parar)