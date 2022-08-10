//Criando MOVIMENTACAO com Função ANONIMA
var px= 0;
var py= 0;

/*
document.addEventListener("keydown", function(event){
    var obj = document.getElementById('dv1');
    var tecla = event.keyCode; //códigos: 37 <- | 38 ^  | 39 ->  | 40 v    
    if(tecla == 37){
        px= px-10
        obj.style.left= px+"px";
    }else if(tecla == 38){
        py= py-10;
        obj.style.top= py+"px";
    }else if(tecla == 39){
        px= px+10;
        obj.style.left= px+"px";
    }else if(tecla == 40){
        py= py+10
        obj.style.top= py+"px"
    }
});
*/

//Criando MOVIMENTACAO com FUNCAO
function move(){
    var obj = document.getElementById('dv1');
    var tecla = event.keyCode; //códigos: 37 <- | 38 ^  | 39 ->  | 40 v    
    if(tecla == 37){
        px= px-10
        obj.style.left= px+"px";
    }else if(tecla == 38){
        py= py-10;
        obj.style.top= py+"px";
    }else if(tecla == 39){
        px= px+10;
        obj.style.left= px+"px";
    }else if(tecla == 40){
        py= py+10
        obj.style.top= py+"px"
    }else if(tecla == 13){
        alert('Evento keydown removido')
        document.removeEventListener("keydown", move);
    }
}

document.addEventListener("keydown", move);

function mudaCor(obj, cor){
    alert('vamos voltar a andar')
    document.getElementById('dv1').style.backgroundColor="#f00";
    document.addEventListener("keydown", move)
    
}

document.getElementById('dv1').addEventListener('click', mudaCor);
