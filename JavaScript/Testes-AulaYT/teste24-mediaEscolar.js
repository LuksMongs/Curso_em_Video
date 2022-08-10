//funcao para descobrir a media das notas
//obter a media a partir de uma array
//classificar as notas em:
// 0-59: F | 60-69: D | 70-79: C | 80-89: B | 90-100: A

const notasDoAluno = [15,20,32];

function mediaAluno (arr){
    let somaNotas = 0;
    let mediaNotas = 0;
 
    for(let nota of arr){
        somaNotas = somaNotas+nota;
    }
    
    mediaNotas = Math.floor (somaNotas/(arr.length))

    if(mediaNotas <= 59){
    console.log('a nota média do aluno foi '+mediaNotas+' portanto teve nota F')
    
    }else if(mediaNotas>=60 && mediaNotas<= 69){
    console.log('a nota média do aluno foi '+mediaNotas+' portanto teve nota D')
    
    }else if(mediaNotas>=70 && mediaNotas<= 79){
    console.log('a nota média do aluno foi '+mediaNotas+' portanto teve nota C')

    }else if(mediaNotas>=80 && mediaNotas<= 89){
    console.log('a nota média do aluno foi '+mediaNotas+' portanto teve nota B')

    }else if(mediaNotas>=90 && mediaNotas<= 100){
    console.log('a nota média do aluno foi '+mediaNotas+' portanto teve nota A')
    
    }
}

mediaAluno(notasDoAluno)

// OUTRA FORMA, MAIS SIMPLES SERIA:

function mediaAluno2(arr2){
    let somaNotas2 = 0;
     
    for(let nota2 of arr2){
        somaNotas2 = somaNotas2+nota2;
    }
    
    let mediaNotas2 = Math.floor (somaNotas2/(arr2.length));
    
    if(mediaNotas2 <= 59) return "F";
    if(mediaNotas2 <= 69) return 'D';
    if(mediaNotas2 <= 79) return 'C';
    if(mediaNotas2 <= 89) return 'B';
    return 'A'  
}

console.log(mediaAluno2(notasDoAluno))