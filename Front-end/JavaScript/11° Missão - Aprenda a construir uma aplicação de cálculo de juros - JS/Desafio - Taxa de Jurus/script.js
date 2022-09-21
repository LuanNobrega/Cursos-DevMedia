var valorDevido = Number(0);
var diasAtraso = Number(0);
var jurus = Number(0);
var valorDaDividaFinal = Number(0);
var continua = true;

while (continua == true){
    var valorDevido = prompt("Informe o valor devido: ");
    if(valorDevido <= 0){
        console.log("Não possui dívida, aplicação encerrada")
        alert("Não possui dívida, aplicação encerrada")
    }else{
        console.log("O valor devido é: "+valorDevido)
        diasAtraso = prompt("\nInforme quantos dias se passaram do dia do vencimento: .")
        if(diasAtraso <= 0){
            console.log("Aplicação encerrada, não possui dias de atraso")
            alert("Não possui dias de atraso, aplicação encerrada")
        }else{
            console.log("A dívida já está com "+diasAtraso+" dias de atraso.")
            if (diasAtraso <=0){
                console.log("A dívida final é de R$: "+valorDaDividaFinal)
                alert("A dívida final é de R$: "+valorDaDividaFinal)
            }else if(diasAtraso <= 15){
                jurus = 5
                console.log("A taxa de jurus é de "+jurus+"%")
            }else if (diasAtraso > 15){
                jurus = 10
                console.log("A taxa de jurus é de "+jurus+"%")
            }       
            valorDaDividaFinal = Number(valorDevido) + (Number(valorDevido)*(Number(jurus)/100))
                console.log("A dívida final é de R$: "+valorDaDividaFinal)
                alert("A dívida final é de R$: "+valorDaDividaFinal)
            
        }
    }
    var continua = prompt("Deseja continuar e fazer outra consulta?\nDigite:\n1 - Sim\n2 - Não")
        if(continua == 1){
            continua == true;
        }else if (continua == 2){
            continua == false;
            console.log("Aplicação encerrada")
            alert("Aplicação encerrada")
            break
        }
}
   
        






