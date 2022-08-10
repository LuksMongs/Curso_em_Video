/*

function mensagem(){
    alert('Olá Mundo!!!');
    document.getElementById("dv1").style.backgroundColor="#f0f";
}

document.getElementById("dv1").addEventListener('click', mensagem);

function mudaCor(){
    document.getElementById("dv1").style.backgroundColor="#00f"
}
document.getElementById('btnAlert').addEventListener('click', mudaCor)

//poderia criar uma variavel var dv1 = document.getElementById("dv1") 
//assim evitamos escrever todo o código docum... ficando:
*/
var dv1 = document.getElementById("dv1")


function mensagem(){
    alert('Olá Mundo!!!');
    dv1.style.backgroundColor="#f0f";
}

dv1.addEventListener('click', mensagem);

function mudaCor(){
    dv1.style.backgroundColor="#00f"
}

function mudaCorOver(){
    dv1.style.backgroundColor="#0ff"
}

function mudaCorOut(){
    dv1.style.backgroundColor="#b1d3b0"
}

document.getElementById('btnAlert').addEventListener('click', mudaCor)
dv1.addEventListener('mouseover', mudaCorOver)
dv1.addEventListener('mouseout', mudaCorOut)

//Unindo todas as funcoes em uma só.

function mudaCorTodas(obj, cor){
    obj.style.backgroundColor=cor;
}

dv1.addEventListener('click', function(event){
    mudaCorTodas(dv1,"#f0f")
})
dv1.addEventListener('mouseover', function(){
    mudaCorTodas(dv1,"#ff0")
})
dv1.addEventListener('mouseout', function(){
    mudaCorTodas(dv1,"#0ff")
})
