document.getElementById("texto").style.color='#f00';
document.getElementById('texto').style.fontSize='80px';

//Para Não ter que escrever toda vez todo o comando:
var txt = document.getElementById('texto');
var cx = document.getElementById('caixa');

txt.style.textAlign='center';

cx.style.border= '5px solid #00f';
cx.style.width= '300px';
cx.style.height= '300px';
cx.style.backgroundColor="#aaf";
cx.style.margin="auto"

// o comando DISPLAY permite controlar a exibição.

 //txt.style.display="none" 

//inner.HTML
document.getElementById("cxtexto").style.display="none"

document.write('<hr>')
var nomeTagP = document.getElementById("textoNome").innerHTML
document.write(nomeTagP)
document.getElementById('textoNome').innerHTML = "novoNome"

var tagsP= document.getElementsByTagName('p')
document.write("<br>")
document.write(tagsP[2].innerHTML);
var tagsP2= document.getElementsByTagName('p')[1].innerHTML
document.write("<br>")
document.write(tagsP2)
document.write(document.getElementsByTagName('p')[2].style.color="#f00")

var tags3= document.getElementsByTagName("*");
tags3[14].style.color='#0f0'