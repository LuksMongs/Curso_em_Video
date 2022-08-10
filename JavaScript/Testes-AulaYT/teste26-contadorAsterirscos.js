// funçao para exibir o número de asteriscos, em linha, predeterminados.

function exibirAsteriscos(nAste){
    
    let juntaAste = '';

    for (let i=1; i<=nAste; i++){   //começa no um pois já coloca 01 * no primeiro loop
       juntaAste = juntaAste +'*'
        console.log(i+'- '+juntaAste)
    }   
   
}

exibirAsteriscos(3)

// Outra Forma é o loop dentro de um loop

function exibirAsteriscos2(linhas){
    for(let linha=1; linha<=linhas; linha++){
        let padrao = '';
        for(let y=0; y<linha; y++){ //para cada valor de 'linha', o for do y roda o mesmo valor de vezes. 
            padrao= padrao + "*";   // linha valendo 3, por ex., for do y vai rodar 3x. (loop dendro de loop)
        }
        console.log(padrao)
    }
}

exibirAsteriscos2(4)