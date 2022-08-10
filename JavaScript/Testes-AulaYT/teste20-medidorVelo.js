//velocidade máxima 70
// a cada 5km acima do limite você ganha 1 pto na carteira
// Math.floor()  .: para arredondar o valor
// caso pontos maior que 12 -> 'Carteira Suspensa'.

function testeVelocidade (velocidade){
     
    const velocidadeMaxima = 70;
    const veloPorPontos = 5;    //essa prática é pra em caso de alteração dos valores bases, não ser necessário a alteração de item por item dentro do código    
    
    if(velocidade <= velocidadeMaxima){
        console.log ('Veículo dentro do limite de Velocidade.');
    }else if (velocidade > velocidadeMaxima){
        let pontosRecebidos = 0
        console.log('Veículo ACIMA do limite de Velocidade.');
        pontosRecebidos = Math.floor (((velocidade - velocidadeMaxima)/veloPorPontos)*1);

        if(pontosRecebidos < 12){
        console.log('E receberá '+pontosRecebidos+' ponto em sua carteira');
        }else
        console.log('Sua Pontuação na Carteira será '+pontosRecebidos+' pontos');
        console.log('Pontuação ACIMA DA MÁXIMA PERMITIDA (12). >> CAREIRA SUSPENSA <<');
    }
}

testeVelocidade(155);