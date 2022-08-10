var fm = document.forms.length;
document.write(fm)  //como o FORMS aponta para o FORMULARIO (e não seus elementos),
                    //será retornado 2 (dois) pois exite apenas 2 formulário no html.
document.write('<hr>')//-----------------------------------------------

var fm2 = document.forms[1].id; //retorna o valor do ID do 2º formulário (indice 1)
document.write('<br>'+ fm2 + "<br>")
document.write('<hr>')//-----------------------------------------------

document.write(document.forms.item(0).id)
document.write("<br>")
document.write('<hr>')//-----------------------------------------------

var fm3 = document.forms.namedItem('curso1').id
document.write(fm3)
document.write('<hr>')//-----------------------------------------------

document.write(document.forms[0].innerHTML)
document.write(document.forms.namedItem('curso2').innerHTML)
document.write('<hr>')//-----------------------------------------------

var fm4 = document.forms[1].elements[0].value;
document.write(fm4)
document.write("<br>")
document.write(document.forms[1].elements[1].value)
document.write("<br>")
document.write("<hr>")

var f1 = document.forms[0]
var elem = f1.elements;

document.write(document.getElementById("curso1").elements[0].value)

elem[0].style.backgroundColor="#ddd";
elem[0].value='modificadoComById'

document.write("<br>")
document.write("<hr>")

document.write(document.getElementById("curso1").elements[0].value)


