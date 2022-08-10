
function verificar(){
    var anonasc= window.document.getElementById('anonasc')
    var img= window.document.getElementById('foto');
    var data= new Date();
    var ano = data.getFullYear();
    var idade= ano - anonasc.value
    var selectm= window.document.getElementById('masc'.value) //minha programcao veio até aqui.

    var radiosexo= document.getElementsByName('sexo') //aqui teria que colocar [0][1] pois existem dois radio's
    var genero= ''
    
    if(radiosexo[0].checked){
        genero='masculino'
        if(anonasc.value.length==0 || anonasc.value > ano){
            window.alert('Verifique os dados e tente novamente!')
        
        } else if(idade < 0){  //minha programacao das condiçoes comecou aqui só com if... sem else if.
            detectado.innerHTML= 'Detectamos um erro [idade = '+idade+' anos] favor confira o ano de nascimento'
        } else if(idade <= 10){
            detectado.innerHTML='Detectamos ser um menino de '+idade+' anos.'
            img.setAttribute('src', 'resources/h5anos.jpg')
            
        } else if(idade <= 15){
            detectado.innerHTML='Detectamos ser um jovemzinho de '+idade+' anos.'
            foto.src="resources/h10anos.jpg"
        } else if(idade <= 20){
            detectado.innerHTML=`Detectamos ser um Adolescente de ${idade} anos.`
            img.src="resources/h15anos.jpg"
        } else if(idade <= 30){
            detectado.innerHTML= 'Detectamos ser um Jovem-Adulto de '+idade+' anos.'
            foto.src="resources/h20anos.jpg"
        } else if(idade <= 50){
            detectado.innerHTML='Detectamos ser um Adulto de '+idade+' anos.'
            img.src="resources/h30anos.jpg"
        } else if(idade <=80){
            detectado.innerHTML='Detectamos ser um Adulto Maduro de '+idade+' anos.'
            foto.src="resources/h50anos.jpg"
        } else if(idade <=120){
            detectado.innerHTML='Detectamos ser um Idoso de '+idade+" anos."
            img.src="resources/h80anos.jpg"
        } else {
            detectado.innerHTML='Detectamos um erro absurdo [idade= '+idade+' anos]. favor conferir'
        }
    
    
    }else{
        genero= 'mulher'
        if(anonasc.value.length==0 || anonasc.value > ano){
            window.alert('Verifique os dados e tente novamente!')
        
        } else if(idade < 0){  //minha programacao das condiçoes comecou aqui só com if... sem else if.
            detectado.innerHTML= 'Detectamos um erro [idade = '+idade+' anos] favor confira o ano de nascimento'
        } else if(idade <= 10){
            detectado.innerHTML='Detectamos ser uma menina de '+idade+' anos.'
            foto.src="resources/m5anos.jpg"
        } else if(idade <= 15){
            detectado.innerHTML='Detectamos ser uma jovemzinha de '+idade+' anos.'
            foto.src="resources/m10anos.jpg"
        } else if(idade <= 20){
            detectado.innerHTML=`Detectamos ser uma Adolescente de ${idade} anos.`
            img.src="resources/m15anos.jpg"
        } else if(idade <= 30){
            detectado.innerHTML= 'Detectamos ser uma Jovem-Adulta de '+idade+' anos.'
            foto.src="resources/m20anos.jpg"
        } else if(idade <= 50){
            detectado.innerHTML='Detectamos ser uma Adulta de '+idade+' anos.'
            img.src="resources/m30anos.jpg"
        } else if(idade <=80){
            detectado.innerHTML='Detectamos ser uma Adulta Madura de '+idade+' anos.'
            foto.src="resources/m50anos.jpg"
        } else if(idade <=120){
            detectado.innerHTML='Detectamos ser uma Idosa de '+idade+" anos."
            img.src="resources/m80anos.jpg"
        } else {
            detectado.innerHTML='Detectamos um erro absurdo [idade= '+idade+' anos]. favor conferir'
        }
    }   
}