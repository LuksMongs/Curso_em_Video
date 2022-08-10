document.write('Olá Mundo!');
document.write(1983);
document.write('<br>Com quebra de linha')
document.write("<p style='color:#f00'>CFB Cursos<br>Curso de JavaScript.</p>")

window.prompt('texto fora da caixa', "texto dentro da caixa")

var promptConfirm = window.confirm('Deseja Aprender JavaScript?')

var simNao = document.getElementById('testevf')
testevf.innerHTML = promptConfirm

document.write("<hr>")

var num = [5,8,9,11,2,6,7,24,19,23,1]
document.write(num.join("**"))
document.write('<br>')
num.sort()
document.write(num) //ordem errada pois os numeros sao interpretados como STRINGS
//corrigindo o sort:

function ordemNumerica(a,b){
    return a-b;
}

num.sort(ordemNumerica)

document.write('<br>')

document.write(num)

document.write("<hr>")


var mochila= new Array();
var item1= ['Corda', 2], item2= ['Faca', 1], item3= ['Cura', 5], item4= ['Prego', 34]

mochila.push(item1);
mochila.push(item2);
mochila.push(item3);
mochila.push(item4);

document.write(mochila)
document.write('<br>')
//para exibir apenas 01 item 
document.write(mochila[1][0]+' - '+mochila[3][1]) //exibi o item faca com a quantidade do item prego.

document.write(mochila[0][0]+' - '+mochila[0][1]+'<br>')
document.write(mochila[1][0]+' - '+mochila[1][1]+'<br>')
document.write(mochila[2][0]+' - '+mochila[2][1]+'<br>')
document.write(mochila[3][0]+' - '+mochila[3][1]+'<br>')
//para exibir organizado em linhas.



