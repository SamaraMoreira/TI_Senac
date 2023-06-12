var passagemNZ = 13996 //reais
var hotelNZ = 79.15 // dolar
var guiaNZ = 200 // dolar

var dolarNZ = 3.25
var hotelNZReal = hotelNZ * dolarNZ

var guiaNZreal = guiaNZ * dolarNZ

var qtdDias = 10

var valorTotal = passagemNZ + (hotelNZReal * qtdDias) + (guiaNZreal * qtdDias)


function enviaEmail(nomeCliente, destinno,passagem,diariaHotel,guia,qtdDias,valorTotal){
    var email = '${nomeCliente}, voce vai viajar para ${destinno}. A sua passagem custará R$ ${passagem},'+
    'a diária do hotel será de R$ ${diariaHotel} e valor de guia será de ${guia}.'+
    ' Sua viagem de ${qtdDias} dias ficará com o valor total de R$ ${valorTotal}'

    console.log(email)
}

enviaEmail('Fulano','Nova Zelândia',passagemNZ,hotelNZReal,guiaNZreal,qtdDias,valorTotal)