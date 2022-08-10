var texto = document.getElementById("txt").innerHTML

var resultado = texto.search(/curso/i)
//o resultado será 4 pois é a posicão que a palavra "curso" começa.
document.write(resultado)
document.write("<br>")

resultado= texto.replace(/curso/i,"aula")
document.write(resultado)
document.write("<br>")
//note que o texto original é cursoS. o S foi mantido pois só foi indicado a troca até o "o" de cursO.

resultado= texto.replace(/curso/ig,"aula")
document.write(resultado)
document.write("<br>")
//adicionando o modificador "g" é substituido todas as palavras "curso" do texto original

resultado= texto.charAt(2)
document.write(resultado)
document.write("<br>")
//retorna o caracter da posição indicada. lembrando que a contagem começa em zero (0)

resultado= texto.charCodeAt(2)
document.write(resultado)
document.write("<br>")
//retorna o CÓDIGO do caractere que teve a posição indicada.


resultado= String.fromCharCode(66)
document.write(resultado)
document.write("<br>")
//retorna o CÓDIGO do caractere que teve a posição indicada.

var txt1=" vamos concatenar esse texto com"
var txt2= " esse outro texto"
var txt3=" e ainda adicionamos mais"
resultado= txt1.concat(txt2+txt3)
document.write(resultado)