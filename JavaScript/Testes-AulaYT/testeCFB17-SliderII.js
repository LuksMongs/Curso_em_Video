var slider= document.getElementById('dvslider')
var numImg=1;
var btAnt= document.getElementById('anterior')
var btProx= document.getElementById('proxima')
var tempoMudaImg=4000;
var barraLoad= document.getElementById('dvbarra')
var tempoBarra= tempoMudaImg/100
var tamanhoBarra= 0;

slider.style.backgroundImage="url(img/s"+numImg+".jpg)";

function mudaAnterior(){
    tempoMudaImg=3000;
    tamanhoBarra= 0;
    if(numImg > 1){
        numImg--
        slider.style.backgroundImage="url(img/s"+numImg+".jpg)";
    }else{
        numImg = 5
        slider.style.backgroundImage="url(img/s"+numImg+".jpg)";
    }
}

function mudaProximo(){
    tempoMudaImg=3000;
    tamanhoBarra= 0;
    if(numImg < 5){
        numImg++
        slider.style.backgroundImage="url(img/s"+numImg+".jpg)";
    }else{
        numImg= 1;
        slider.style.backgroundImage="url(img/s"+numImg+".jpg)";
    }
}

function tamBarra(){
    if(tamanhoBarra < 100){ 
        tamanhoBarra= tamanhoBarra+1;
        barraLoad.style.width=tamanhoBarra+"%";
    }else{
        tamanhoBarra= 0;
    }
}

function mudaCorOverAnt(){
    btAnt.style.border=1+"px "+"solid "+"rgba(255,255,255,0.4)";
}

function mudaCorOutAnt(){
    btAnt.style.border= "none";
}

function mudaCorOverProx(){
    btProx.style.border=1+"px "+"solid "+"rgba(255,255,255,0.4)";
}

function mudaCorOutProx(){
    btProx.style.border= "none";
}

btAnt.addEventListener('click', mudaAnterior);
btAnt.addEventListener('mouseover', mudaCorOverAnt);
btAnt.addEventListener('mouseout', mudaCorOutAnt);
btProx.addEventListener('click', mudaProximo);
btProx.addEventListener('mouseover', mudaCorOverProx);
btProx.addEventListener('mouseout', mudaCorOutProx)

setInterval(mudaProximo,tempoMudaImg);
setInterval(tamBarra, tempoBarra)






//style.backgroundColor='#0f0';