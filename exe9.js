var passagemNZ = 13996 //reais
var hotelNZ = 79.15 // dolar
var guiaNZ = 200 // dolar

//de real para dólar -> divide por 3.25
//de dolar para real -> multiplica por 3.25

var dolarNZ = 3.25
var hotelNZReal = hotelNZ * dolarNZ
console.log(hotelNZReal)

var guiaNZreal = guiaNZ * dolarNZ
console.log('O valor em real para o guia é de R$',guiaNZreal)

var passagemNZDolar = passagemNZ / dolarNZ
console.log('A passagem para NZ fica NZ $:',passagemNZDolar.toFixed(2))
