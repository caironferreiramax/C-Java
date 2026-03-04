// let num = parseInt(prompt("Digite um número:"));
// console.log(num)
// while(num < 100 || isNaN(num)){
    //     alert("Número Inválido!");
    //     num = parseInt(prompt("Digite um número:"));
    // }
    
    // alert("Parábens!!")
    
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


// Saiba o seu IMC
// let peso = 80.0;
// let altura = 1.80;
// let imc = peso / (altura ** 2);

// let peso = parseFloat(prompt("Digite o seu peso"));
// let altura = parseFloat(prompt("Digite a sua altura"));
//     let imc = peso / (altura * altura);
//     alert("O seu imc é: " + imc.toFixed(2));

// console.log("O IMC dessa pessoa é: " + imc);

    // let peso = parseFloat(prompt("Digite o seu peso"));
    // let altura = parseFloat(prompt("Digite a sua altura"));
    
    // if (isNaN(peso) || isNaN(altura)) {
    //     alert("Digite apenas números. Use (.) para números decimais!!")
    // }
    
    // else{
    //     let imc = peso / (altura * altura);

    //     alert("O seu imc é: " + imc.toFixed(2));
    // }

// VERIFIQUE SE O SALDO É SUFICIENTE PARA O SAQUE

// let saldo = parseFloat(prompt("Digite o seu saldo!"));
// let saque = parseFloat(prompt("Digite o quanto deseja sacar!"));

// if(saldo > saque){
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

// VERIFIQUE SE HOJE É "SABADO" OU "DOMINGO" (FINAL DE SEMANA)

// let dia = prompt("Digite um dia da semana!");

// if(dia === "Sábado" || dia === "Domingo"){
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

// let real = parseFloat(prompt("Digite um valor (BRL)"));
// let dolar = parseFloat(prompt("Digite um valor(USD)"));
// let conversão = real / dolar;

// alert (`O valor convertido é: ${conversão}`);


// let continuar = true;

//     while(continuar) {
//     let C = parseFloat(prompt("Informe uma temperatura em °C: "));
//     let F = (C*9) / 5 + 32;
//     alert("A temperatura em fahrenhet é: " + F);
//     continuar = confirm("Deseja inserir uma nova temperatura?");
// }

