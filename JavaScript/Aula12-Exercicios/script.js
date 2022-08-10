function carregar(){
    var turno= window.document.getElementById('msgturno');
    var foto= window.document.getElementsByTagName('img')[0];
    var horario= new Date();
    var agora= horario.getHours();
    msgturno.innerHTML=`Agora são ${agora} horas.`
    
    if(agora >= 0 && agora < 12) {
        foto.src= 'resources/manha-pq.png'
        document.body.style.background= `#C9CFCF`        
    } else if(agora >= 12 && agora < 18){
        foto.src= 'resources/tarde-pq.png'
        document.body.style.background = ('#AA7B79') //ou =`#fff`
    } else {
        foto.src= 'resources/noite-pq.png'
        document.body.style.background = `#03314A`
    }
}