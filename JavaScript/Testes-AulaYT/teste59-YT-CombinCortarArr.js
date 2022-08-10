const primeiro = [1,4,3,2];
const segundo = [5,8,7,6];

//Combinar Arrays
let concatenados = primeiro.concat(segundo)
console.log(concatenados)

//Dividir Arrays
let separados = concatenados.slice(1,4);
console.log(separados)
//note que o último índice indicado (no ex. 4) não é copiado
//para a nova array (separados)


//Com OBJETOS----------------------------------------------------

const obj01 = [
    {id: 1, conect:15, uper: 8},
    {id: 2, conect:12, uper: 9},
    {id: 3, conect:14, uper: 7},
];

console.log(obj01);
let combiObjArr = obj01.concat(segundo);
console.log(combiObjArr)

obj01[1].id = 10,obj01.conect=22,obj01.uper=12;
console.log(obj01)

let descombObjArr = combiObjArr.slice(0,3)
console.log(descombObjArr)