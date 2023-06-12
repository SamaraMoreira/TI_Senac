let idade = 27

if(idade >= 18 && idade <70){
    console.log('O voto é obrigatório')
}else if(idade >= 70){
    console.log('O voto é opcional')
}else if(idade >=16 && idade <18){
    console.log('O voto é opcional')
}else if(idade < 16){
    console.log('Ainda nao vota')
}