document.write(Date());
document.write("<br>")

var dt= new Date();
var diaSem= dt.getDay();
var dia= dt.getDate();
var mes= dt.getMonth();
var ano= dt.getFullYear();
document.write(dt);
document.write("<br>");
document.write(diaSem); // quarta-feira (3) pois domingo (0).
document.write("<br>")
document.write(dia);
document.write("<br>");
document.write(mes); // mes começa no 0 (janeiro)... dezembro é 11.
document.write("<br>");
document.write(ano);
document.write("<br>");
document.write(diaSem+", "+dia+" de "+mes+" de "+ano);
document.write("<br>");
document.write("<hr>");

//Convertendo em data por extenso: utilizaremos ARRAY
var meses = ["janeiro", 'fevereiro', "março", 'abril', "maio", 'junho', "julho", 'agosto', "setembro", 'outubro', "novembro", 'dezembro']
var semanas = new Array( 'domingo', 'segunda', "terça", 'quarta', "quinta", 'sexta', "sábado")
document.write(semanas[diaSem]+", "+dia+" de "+meses[mes]+" de "+ano)
document.write("<br>");
document.write("<hr>");

var hr= dt.getHours();
var min= dt.getMinutes();
var seg= dt.getSeconds();
document.write(hr);
document.write("<br>");
document.write(min);
document.write("<br>");
document.write(seg);
document.write("<br>");
document.write(hr+':'+min+":"+seg)
document.write("<hr>");

var newDate= new Date()
newDate.setDate(dt.getDate()+2) // acrescentamos 2 dias a data original
newDate.setFullYear(dt.getFullYear()+3)
document.write(newDate)
document.write("<br>");
document.write("<hr>");

var dataCompleta= new Date(1983,4,14)//Ano,Mes,Dia,Hora,Min,Seg,Miliseg
document.write(dataCompleta)
document.write("<br>");
document.write("<hr>");

document.write(Math.SQRT1_2) //raiz quadrada de 1/2 (constante predefinida)
document.write("<br>");
document.write(Math.abs(-10))
document.write("<br>");
document.write(Math.floor(7.8))
document.write("<br>");
document.write(Math.ceil(10.3))
document.write("<br>");
document.write(Math.round(10.8)+' '+Math.round(10.3))
document.write("<br>");
document.write(Math.sqrt(16)) //raiz quadrada de 1/2  
document.write("<br>");
document.write(Math.random(0,20))
document.write("<br>");
document.write(Math.round((Math.random(0,1)*60)))
document.write("<br>");

for(i=0;i<6;i++){
    document.write(Math.round((Math.random(0,1)*60))+"<br>")
}

document.write("<br>")
document.write(Math.max(15,85,44,67,81,22,6,84,91,17,29))
document.write("<br>")
document.write(Math.min(15,85,44,67,81,22,6,84,91,17,29))