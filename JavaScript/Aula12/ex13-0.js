var agora = new Date()
var diaSem = agora.getDay()
console.log(`Hoje é dia ${diaSem}`)
// No JS os dias são contados assim: 
// 0-Dom / 1-Seg / 2-Ter / 3-Qua / 4-Qui / 5-Sex / 6-Sáb

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log("Quarta-Feira")
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log("Sábado")
    default:
        console.log('[ERRO]: dia inválido')
}





