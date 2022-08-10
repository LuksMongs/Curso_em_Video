

function confirmar(){
    var nomeConv = window.document.getElementById('convidado');//uma forma de receber
    let nomeConvidado = nomeConv.value;                        //o valor do input.
    var nomeAnfitriao = window.document.getElementById('anfitriao').value;//outra fomra de receber
        window.alert('verificando');                                      //o valor do input.
    if(nomeAnfitriao === 'Lucas' && Lucas.includes(nomeConvidado)){
        return resposta.innerHTML = 'Você Foi CONVIDADO! Presença Confirmada';
    }if(nomeAnfitriao === 'Jessica' && Jessica.includes(nomeConvidado) ){
        return resposta.innerHTML = 'Você Foi CONVIDADO! Presença Confirmada';
    }else{
        return resposta.innerHTML = "VAZA DAQUI BICÃO!!!"
    }
}

var Lucas = ['Jessica', 'Lucky','José', 'Angela'];
var Jessica = ['Abdias', 'Dora', 'Lucky', 'Bruce'];

//resposta.innerHTML = 'Será o '+nomeConvidado.value+' benedito';
 
