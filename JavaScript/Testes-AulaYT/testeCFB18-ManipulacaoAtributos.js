document.getElementById('carro').setAttribute("class", "c2")
//foi adicionado uma CLASSE de valor c1 a div de id: carro

var objCarro= document.getElementById("carro");

function trocaCarro(c){
    if(c==1){
        objCarro.setAttribute("class",'c1')
    }else if(c==2){
        objCarro.setAttribute('class', "c2")
    }else if(c==3){
        objCarro.setAttribute("class", "c3")
    }
}

function removerCarro(){
    objCarro.removeAttribute("class");
}

function verifica(){
    if(objCarro.hasAttribute("class")){
        alert("atributo CLASS está na tag")
    }else{
        alert("tag sem atributo CLASS")
    };
}