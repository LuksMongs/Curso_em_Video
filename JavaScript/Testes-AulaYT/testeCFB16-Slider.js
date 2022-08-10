// MEU SLIDER - montado por mim
/*
var numImg = 1;
var slider= document.getElementById("dvslider");
slider.style.backgroundImage="url(img/s1.jpg)";

function trocadorImagem(){
    var imagem = new Image();
    imagem.src="img/s"+numImg+".jpg";
    
    if(numImg < 5){
        slider.style.backgroundImage="url('"+imagem.src+"')";
        numImg++;
    }else if(numImg >= 5){
        slider.style.backgroundImage="url('"+imagem.src+"')";
        numImg=1
    }
}

setInterval(trocadorImagem,2000);

*/

//SLIDER do curso CFB

var imgs=[]; 
var slider;
var imgAtual;
var maxImg;
var tempoTroca=2000;

function preCarregamento(){
    var numDaImg= 1;
    for(var i=0;i<5;i++){
    imgs[i]= new Image();
    imgs[i].src="img/s"+numDaImg+".jpg";
    numDaImg++;
    }
}

function carregarImg(img){
    slider.style.backgroundImage="url('"+imgs[img].src+"')";
}

function inicia(){
    preCarregamento();
    imgAtual=0;
    maxImg=imgs.length-1 //pois a arrey inicia do 0(zero) e o length começa contagem do 1.
    slider = document.getElementById("dvslider");
    carregarImg(imgAtual);
    setInterval(troca,tempoTroca)
}

function troca(){
    imgAtual++
    if(imgAtual>maxImg){
        imgAtual=0;
    }
    carregarImg(imgAtual);
}

window.addEventListener("load",inicia);
  
