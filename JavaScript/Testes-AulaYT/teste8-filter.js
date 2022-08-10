var departure = ['8am', '12pm','7pm','6am','3pm','11am','2pm', '10am', '4pm',]
console.log(departure)

console.log(departure[departure.length-1]) //Somente teste acerca do (.length-1)

function manha(time){
    return time.includes('am')
}

function tarde(time){
    return time.includes('pm')
}

let horariosManha = departure.filter(manha)
let horariosTarde = departure.filter(tarde)

console.log('Horários da Manhã: ' + horariosManha)
console.log('Horários da Tarde: ' + horariosTarde)


console.log ('fruit'.length)

console.log ('fruit'['fruit'.length-1])


