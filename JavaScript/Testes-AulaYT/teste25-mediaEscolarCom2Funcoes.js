var notasDoAluno = [98,89,95]

let media = 0;

function calcularMedia (arr){
    
    for(let nota of arr){
        media = media + nota
    }
    media = media/(arr.length)


    
    return letraNota(media) 
}


function letraNota (mediaDoAluno){
    let letra = '';
    if(mediaDoAluno <= 59) return 'F';
    if(mediaDoAluno <= 69) return 'D';
    if(mediaDoAluno <= 79) return 'C';
    if(mediaDoAluno <= 89) return 'B';
    else return 'A';
}

console.log(calcularMedia(notasDoAluno))
console.log ('o valor da média do Aluno foi '+media)