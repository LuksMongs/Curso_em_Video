const mouse ={
    cor: 'black',
    marca: 'techlog',
    tamFio: 2,
}

console.log(mouse)

mouse.velocidade = 5000
mouse.trocarDPI = function(){ 
    console.log('mudando DPI');
}
console.log(mouse)

delete mouse.trocarDPI;
delete mouse.tamFio;
console.log(mouse)