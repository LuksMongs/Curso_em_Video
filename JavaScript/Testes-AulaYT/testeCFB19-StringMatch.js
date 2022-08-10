var texto= document.getElementById("txt").innerHTML

var resultado= texto.match('html')
document.write(resultado)
document.write("<br>")

var resultado= texto.match('aula')
document.write(resultado)
document.write("<br>")

var resultado= texto.match(/de/g)
document.write(resultado+" : "+resultado.length)
document.write("<br>")

var resultado= texto.match(/javascript/g)
document.write(resultado+" : "+resultado.length)
document.write("<br>")

var resultado= texto.match(/javascript/ig)
document.write(resultado+" : "+resultado.length)
document.write("<br>")

document.write(resultado[1]+" "+resultado[0])
document.write("<br>")

var resultado= texto.match(/[oa]/g)
document.write(resultado+" : "+resultado.length)
document.write("<br>")

var resultado= texto.match(/[^oa]/g)
document.write(resultado+" : "+resultado.length)
document.write("<br>")

var resultado= texto.match(/[a-g]/ig)
document.write(resultado+" : "+resultado.length)
document.write("<br>")
document.write(resultado[2])
document.write("<br>")

var resultado= texto.match(/\d/ig)
document.write(resultado+" : "+resultado.length)
document.write("<br>")
