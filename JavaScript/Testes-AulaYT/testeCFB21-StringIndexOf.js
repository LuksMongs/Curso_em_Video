var texto = document.getElementById("txt").innerHTML
var resultado;

resultado= texto.indexOf("J");
document.write(resultado);
document.write("<br>")

resultado= texto.indexOf("k");
document.write(resultado); //-1 indica que não foi encontrado.
document.write("<br>")

resultado= texto.lastIndexOf("j");
document.write(resultado);
document.write("<br>")

var texto2= "JavaScript"
var texto3= "CFB Cursos - Curso de Javascript - aula 46 do curso de javascript"
resultado= texto.localeCompare(texto2);
document.write(resultado);
document.write("<br>")
resultado= texto.localeCompare(texto3);
document.write(resultado);
document.write("<br>")

resultado= texto.slice(3,10)
document.write(resultado);
document.write("<br>")

resultado= texto.split(" ");
document.write(resultado);
document.write("<br>")
document.write(resultado[5]);
document.write("<br>")

resultado= texto.substr(3,7)
document.write(resultado);
document.write("<br>")

resultado= texto.toUpperCase().substr(22,10)
document.write(resultado)