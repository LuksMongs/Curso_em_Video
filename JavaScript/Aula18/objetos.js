let amigo = {nome: 'José', 
sexo: 'Masculino', 
peso: 85.4,
engordar(p=0){
    this.peso+= p
}}
console.log (amigo)
console.log (amigo.nome)
console.log (amigo.peso)
amigo.engordar(2)
console.log (amigo.peso)