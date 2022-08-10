const numeros = [1,2,3,''];

//mais comum
for(let num of numeros){
    console.log(num);
};

//ForEach .: é necessário receber uma function callback
numeros.forEach(function(numer){
    console.log(numer);
});

//Resumindo com ARROW FUNCTION
numeros.forEach((numero) => console.log(numero));
