var p= document.querySelectorAll('p');
p[0].style.color='#0f0';
p[0].innerHTML = 'NovoTexto';

var elementos= document.querySelectorAll('.titulo');
elementos[1].style.color="#f00";

for(i=0; i<elementos.length;i++){
    document.write(elementos[i].innerHTML+"<br>");
}
var p_titulo= document.querySelectorAll('p.titulo');
document.write(p_titulo[0].innerHTML);

var div_p = document.querySelectorAll('div > p');
for(x=0; x<div_p.length;x++){
    document.write(div_p[x].style.color='#f0f');
}