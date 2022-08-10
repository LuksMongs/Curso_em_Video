function parImpar (nx){
    for(i=0; i<=nx; i++){
        if(i%2 === 0){
            console.log(`número ${i} = par`)
        }else{
            console.log(`número ${i} = impar`)
        }
    }
}

parImpar(7)