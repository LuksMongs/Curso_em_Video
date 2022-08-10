function mudaCor(obj,cor){
    obj.style.backgroundColor=cor;
};

function mudaPosicao(obj){
    obj.style.position="absolute";
    obj.style.left= Math.random()*500+'px';
    obj.style.top= Math.random()*500+'px';
};

function ola(){
    var data= new Date();
    var hora= data.getHours();
    if(hora<12){
        alert('Bom Dia Mundo!')
    }else if(hora>=12 && hora<18){
        alert('Boa tarde Mundo!')
    }else{
        alert('Boa Noite Mundo!')
    }
}