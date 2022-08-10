//São de dois tipos
//Tipo Primitivo
var msg = 'olá mundo!'
var msg2 = '   Espaços em Demasia e outras coisas a mas '

//Tipo Objeto
var novamsg = new String('bom dia meu povo lindo!')

console.log(msg.length, novamsg.length)
console.log(msg[2], novamsg[2])

//confirmar a presença de uma STRING em uma mensagem
console.log(msg.includes('povo'), novamsg.includes('povo'))

//Iniciar e terminar a frase STRING
console.log(msg.startsWith('mundo'), novamsg.endsWith('o!'))

//Identificar o índice que inicia uma letra ou conjunto de letras
console.log(msg.indexOf('mundo'), novamsg.indexOf('meu'))

//Substituir uma string
console.log(msg.replace('olá', 'hello'), novamsg.replace('lindo','animado'))

//Remover espaços no início ou final
console.log(msg2.trim())

//Repartir uma STRING em partes menores a partir de um identificador
console.log(msg2.split(' '))