//Tratamento de Erros
document.write("Tratamento de ERROS <br>")

try{
    document.write("Curso JavaScript <br>")
    document.writi('Curso de JS <br>')
}catch(e){
    document.write('Erro<br>')
    console.log('Mensagem de erro: '+e.message);
    //ou
    document.write('Erro: '+e.message)
}

//Exemplo 2:
document.write("<hr>")
var valor;
try{
    valor= prompt('Digite um valor')
    if(valor > 10){
        throw new Error('valor inválido: deve ser menor ou igual a 10')
    }
    document.write('valor digitado: '+valor)
}catch(e){
    document.write('Erro: '+e.message)
}finally{
    document.write('<br>Fim do tratamento')
}