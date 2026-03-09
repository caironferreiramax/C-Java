
//A senha do usuário deve ser "123", faça até ele acertar.
    
    // let senha = parseInt(prompt("Digite a senha"));
    // while(senha !== 123){
    //     alert("Senha Incorreta!");
    //     senha = parseInt(prompt("Digite a senha"));
    // }
    // alert("Login Autorizado!")



// let time = 10;
// let start = confirm("Deseja iniciar o cronômetro?");
//     while(start && time > 0){
//     alert(`tempo: ${time}`);
//     --time;

//     if(time == 0){
//         alert("Lançar!");
//     }

// }

// Crie um menu 

// let menu = prompt("Olá, qual o seu pedido?");
// while(menu !== "café"){
//     alert("Item fora do menu");
//     menu = prompt("Olá, qual o seu pedido?");
// } alert("Pedido feito!")

// VERIFIQUE O SEU IMC

// let peso = parseFloat(prompt("Digite o seu peso"));
// let altura = parseFloat(prompt("Digite a sua altura"));
//     let imc = peso / (altura **2);
//     alert("O seu imc é: " + imc.toFixed(2));


    // let peso = parseFloat(prompt("Digite o seu peso"));
    // let altura = parseFloat(prompt("Digite a sua altura"));
    
    // if (isNaN(peso) || isNaN(altura)) {
    //     alert("Digite apenas números. Use (.) para números decimais!!")
    // }
    
    // else{
    //     let imc = peso / (altura **2);

    //     alert(`O IMC Calculado é: ${imc.toFixed(2)}`);
    // }

// VERIFIQUE SE O SALDO É SUFICIENTE PARA O SAQUE

// let saldo = parseInt(prompt("Digite o seu saldo!"));
// let saque = parseInt(prompt("Informe o quanto deseja sacar!"));

// if(saldo >= saque){
//     saldo = saldo - saque;
//     alert(`Seu saque foi realizado com sucesso`);
//     alert(`Seu saldo atual é: ${saldo}`);
// } else{
//     alert(`Seu saldo ${saldo} é insuficiente para a realização do saque`)
// }

// O LOGIN DEVE SER "ADMIN" E A SENHA "1234"

// let login = prompt("Digite o seu nome de usuário");
// let senha = prompt("Digite a sua senha");

// if(login !== "admin" && senha !== "1234"){
//     alert(`O seu login ou senha está incorreta!`);
// } else{
//     alert(`Login realizado com sucesso!`);
// }

// let login = prompt("Digite o seu nome de usuário");
// let senha = prompt("Digite a sua senha");

// if(login === "admin" && senha === "1234"){
//         alert(`Login realizado com sucesso!`);
//     } else{
//         alert(`O seu login ou senha está incorreta!`);
// }

// VERIFIQUE SE HOJE É "SABADO" OU "DOMINGO" (FINAL DE SEMANA)

// let dia = prompt("Digite um dia da semana!");

// if(dia == "Sábado" || dia == "Domingo"){
//     alert(`${dia} é final de semana`);
// } else{
//     alert(`${dia} é dia útil`);
// }

// RECEBA UM NÚMERO DE 1 A 7E EXIBA O NOME DO DIA CORRESPONDENTE (1 PARA DOMINGO, 2 PARA SEGUNDA, ETC).

// let dia = parseFloat(prompt(`Digite um número de 1 a 7`));

// switch (dia) {
//     case 1:{
//         alert(`${dia} é Domingo`);
//         break;
//     }
//     case 2:{
//         alert(`${dia} é Segunda`);
//         break
//     }
//     case 3:{
//         alert(`${dia} é Terça`);
//         break
//     }
//     case 4:{
//         alert(`${dia} é Quarta`);
//         break
//     }
//     case 5:{
//         alert(`${dia} é Quinta`);
//         break
//     }
//     case 6:{
//         alert(`${dia} é Sexta`);
//         break
//     }
//     case 7:{
//         alert(`${dia} é Sábado`);
//         break
//     }
//     default: {
//           alert(`Esse dia não existe`);
//         break
//     }
// }

// RECEBA UM MÊS E EXIBA QUAL ESTAÇÃO DO ANO PERTENCE (VERÃO, OUTONO, INVERNO, PRIMAVERA;)

// let mes = prompt("Digite um mês do ano");

// switch (mes) {
//     case "Janeiro":
//     case "Fevereiro":
//     case "Março":{
//         alert(`O mês de ${mes} é da estação verão`);
//         break;
//     }
//     case "Abril":
//     case "Maio":
//     case "Junho":{
//          alert(`O mês de ${mes} é da estação Outono`);
//         break;
//     }
//     case "Julho":
//     case "Agosto":
//     case "Setembro":{
//          alert(`O mês de ${mes} é da estação Inverno`);
//         break;
//     }
//     case "Outubro":
//     case "Novembro":
//     case "Dezembro":{
//          alert(`O mês de ${mes} é da estação Primavera`);
//         break;
//     }

//     default: {
//         alert(`Mês desconhecido`)
//         break;
//     }
// }

// RECEBA DOIS NÚMEROS E UM OPERADOR MATEMATICO, USE O SWITCH CASE

// let num = parseFloat(prompt("Digite o primeiro número"));
// let num2 = parseFloat(prompt("Digite o segundo número"));
// let operador = prompt("digite um operador");
// let resultado;

//     if(isNaN(num) || isNaN(num2)){
//         alert(`Não realizamos operação com string`);
//     } else  { 

//         switch (operador) {
//     case "+":{
//         resultado = num + num2
//         alert(`Esse operador ${operador} é de adição, o resultado foi ${resultado}`)
//         break;
//     }
//     case "-":{
//         resultado = num - num2
//         alert(`Esse operador ${operador} é de subtração, o resultado foi ${resultado}`)
//         break;
//     }
//     case "*":{
//         resultado = num * num2
//         alert(`Esse operador ${operador} é de multiplicação, o resultado foi ${resultado}`)
//         break;
//     }
//     case "/":{
//         resultado = num / num2
//         alert(`Esse operador ${operador} é de divisão, o resultado foi ${resultado}`)
//         break;
//     }
//     default:{
//         alert("Operador desconhecido")
//         break;
//     }
// }
// }

// RECEBA A IDADE DE UM CACHORRO E CONVERTA PARA "ANOS HUMANOS" (idade * 7), FRASE PERWSONALIZADA

// let idadeCachorro = parseInt(prompt("Digite a idade do cachorro"));
// let idadeConvertida = idadeCachorro * 7;
// alert(`O resultado da idade convertida é: ${idadeConvertida} anos`);

// VERIFIQUE SE O NÚMERO É MENOR OU IGUAL A ZERO

// let num = parseInt(prompt("Digite um número"));

// if(num <= 0) {
//     alert(`${num} é menor ou igual a zero`);
// }
// else{
//     alert(`${num} é maior que zero`);
// }

// Calcule a área de um retângulo (base x altura) e mostre o resultado

// let base = parseFloat(prompt("Digite o valor da base"));
// let altura = parseFloat(prompt("Digite o valor da altura"));
// let retangulo = base * altura;
// alert("O valor da área é: " + retangulo);


// VERSÃO CORRIGIDA

// let base = prompt("Digite o valor da base");
// let altura = prompt("Digite o valor da altura");
// let result =0;

// result = base * altura;

// alert(`A área desse retângulo é ${result}cm`)


// CALCULE A MÉDIA ARITIMETICA DE QUATRO NOTAS

// let nota1= parseFloat(prompt("Digite a nota 1: "));
// let nota2= parseFloat(prompt("Digite a nota 2: "));
// let nota3= parseFloat(prompt("Digite a nota 3: "));
// let nota4= parseFloat(prompt("Digite a nota 4: "));
// let mediaAritimetica = (nota1 + nota2 + nota3 + nota4) / 4;

// alert("A sua média é: " + mediaAritimetica);

// CONVERSÃO DE MOEDAS

// let reais = parseFloat(prompt("Digite o valor (BRL)"));
// let moeda = prompt("Digite a moeda que você deseja para qual seja convertida");
// let valorConvertido;

// switch (moeda) {
//     case "USD":{
//         valorConvertido = reais * 0.19;
//         alert(`O resultado com a conversão de ${moeda} em reais para USD fica ${valorConvertido}`);
//         break;
//     }
//     case "EUR":{
//         valorConvertido = reais * 0.16;
//         alert(`O resultado com a conversão de ${moeda} em reais para EUR fica ${valorConvertido}`);
//         break;
//     }
//     case "GBP":{
//         valorConvertido = reais * 0.14;
//         alert(`O resultado com a conversão de ${moeda} em reais para GBP fica ${valorConvertido}`);
//         break;
//     }
//     default:{
//         alert(`Moeda desconhecida`)
//         break;
//     }
// }


// let reais = 100;
// let moeda = "GBP";
// let valorconvertido;

// switch (moeda) {
//     case "USD": {
//         console.log(valorconvertido = reais * 0.19);
//         break;
//     }
//     case "EUR": {
//         console.log(valorconvertido = reais * 0.16);
//         break;
//     }
//     case "GBP": {
//         console.log(valorconvertido = reais * 0.14);
//         break;
//     }

//     default: {
//         console.log("Moeda desconhecida");
//         break;
//     }
// }

// let continuar = true;

//     while(continuar) {
//     let C = parseFloat(prompt("Informe uma temperatura em °C: "));
//     let F = (C*9) / 5 + 32;
//     alert("A temperatura em fahrenhet é: " + F);
//     continuar = confirm("Deseja inserir uma nova temperatura?");
// }


// let nota = prompt("Digite a nota do Aluno");

// switch (nota) {
//     case "A":{
//         alert(`A nota do aluno foi ${nota} = "Excelente"`)
//         break;
//     }
//     case "B":{
//         alert(`A nota do aluno foi ${nota} = "Bom"`)
//         break
//     }
//     case "C":{
//         alert(`A nota do aluno foi ${nota} = "Regular"`)
//         break
//     }
//     case "D":{
//         alert(`A nota do aluno foi ${nota} = "Ruim"`)
//         break
//     }
//     case "F":{
//         alert(`A nota do aluno foi ${nota} = "Reprovado"`)
//         break
//     }
        
//     default:{
//         alert(`Nota desconhecida`)
//         break;
//     }
// }

// let plano = prompt("Escolha o seu plano de assinatura");

// switch (plano) {
//     case "Bronze":{
//         alert(`O seu plano secolhido foi ${plano}, o seu plano permite: 200 Mega, Navegação básica, redes sociais e estudos.`)
//         break;
//     }
//     case "Prata":{
//         alert(`O seu plano secolhido foi ${plano}, o seu plano permite: 500 Mega, Streaming em HD, home office e videochamadas estáveis.`)
//         break;
//     }
//     case "Ouro":{
//         alert(`O seu plano secolhido foi ${plano}, o seu plano permite: 1 Giga, Jogos online, vídeos em 4K e muitos dispositivos conectados.`)
//         break;
//     }
        
//     default:{
//         alert(`Não temos esse plano`)
//         break;
//     }
// }

// let cargo = prompt("Informe o seu cargo").toLocaleLowerCase();

// switch (cargo) {
//     case "admin":{
//         alert(`Com o cargo de ${cargo} você pode: alterar as configurações do sistema, criar/gerenciar usuários e Instalar plugins`)
//         break;  
//     }
//     case "editor":{
//         alert(`Com o cargo de ${cargo} você pode: plubicar/excluir posts, editar/fazer comentários`)
//         break;  
//     }
//     case "visitante":{
//         alert(`Com o cargo de ${cargo} você pode: Esse cargo não permite nenhuma alteração`)
//         break;  
//     }

//     default:{
//         alert(`Cargo desconhecido`)
//         break;
//     }
// }

// while(true) {
//     let num1 = 20;
//     let num2 = 7;
//     let num3 = 6;
//     let num4 = 8;
//     let num5 = 40;

//     media = (num1 + num2 + num3 + num4 + num5) / 2;
//     break;

// }
// console.log(media);


// while(true) {
    
//     let nota1 = parseFloat(prompt("Digite uma 1nota"));
//     let nota2 = parseFloat(prompt("Digite uma 2nota"));
//     let nota3 = parseFloat(prompt("Digite uma 3nota"));
//     let nota4 = parseFloat(prompt("Digite uma 4nota"));
//     let nota5 = parseFloat(prompt("Digite uma 5nota"));
    
//     let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
//     alert(`O resultado da média é ${media}`);
//     break;
// }   

// let distancia = parseFloat(prompt("Informe a distância: "));
// let consumoMédio = parseFloat(prompt("Informe o consumo médio do carro: "));
// let combustivel = 5.80;
// let custoTotal = (distancia / consumoMédio) * combustivel; 
// alert(`O custo Total da distância percorrida é de ${custoTotal.toFixed(2)}`);
        

// let num = parseInt(prompt("Digite um número:"));
// console.log(num)
// while(num < 100 || isNaN(num)){
    //     alert("Número Inválido!");
    //     num = parseInt(prompt("Digite um número:"));
    // }
    
    // alert("Parábens!!")

// let num = 0.0;
// do{
//     num = parseInt(prompt("Digite um número:"));
// }
// while(num < 100)

let menuOp= 0;
do{
    menuOp = parseInt(prompt("Escolha uma opção: 1-Café 2-Chá 3-Sair"));
} while (menuOp != 3);