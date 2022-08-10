var num = 15;
var resultado = num.toString()
document.write(resultado)
document.write("<br>")

//convertendo em bases 
var binario = num.toString(2)
var octadecimal = num.toString(8)
var hexadecimal = num.toString(16)
document.write(binario+"<br>"+octadecimal+"<br>"+hexadecimal)
document.write("<br>")

var texto = "       CFB - Cursos de Aula 22 última de strings      "
document.write(texto) //no navegador os espaços já são removidos automaticamente
alert(texto)//no alert não

alert(texto.trim());//com o trim foi removido os espaços do inicio e final.
document.write("<br>")

//Caracteres Especiais
document.write("iremos inserir as \"aspas\" utilizando a \\barra invertida\\ entendeu")
alert("Podemos quebrar linha \n utilizando o contrabarra n\n")
