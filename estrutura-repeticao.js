// principais estruturas de rep
// for = para(para saber quantas vzs o bloco deve ser executado)
//while = if
//do...while = faça enquanto (ser executado pelo menos uma vez independente da condiçao)
// break = parar o codigo.
//continue = escolher entre um indice e outro./ignorar
//foreach = é usado para percorrer arrays.
//EX:
// for ( let i = 0 ; i < 5; i++){
//     // if (i==3 || i ==4){
//     //     continue;
//     // }
//     if (i == 2){
//         continue;
//     }
//     console.log(`Valor de i: ${i}`);
// }

// let op = 0;
// while (op == 0){
//     console.log("brasil");
//     op = 2;
// }    
// // 
// do{
//     console.log("brasil2")
// } while (op==0);

// for + switch case.
// let i ;
// for (i = 2 ; i <= 2 ; i++){
//     switch(i){
//         case 1:{
//             console.log("CASO 1");
//             break;
//         }
//         case 2:{
//             console.log("CASO 2");
//             break;
//         }
//         default:{
//             console.log("PADRAO");
//             break;
//         }
//     }
// }

// for + if

// let i;
// for (i = 0; i <= 3 ; i++){
//     if (i == 0) continue;
//     if (i == 1){
//         console.log("i é igual a 1.");
//     }else if (i == 2){
//         console.log("i é igual a 2.");
//     }else {
//         console.log("i é 0 ou 3 ou +.");
//     }
// }
//do while EX:
// let depen = 10;
// do{
//     let j == 00;
//     j+=235;
//     if( j)

// }


// ATV-01 
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// ATV-02
// for (let i = 10; i >= 1; i--) {
//     console.log(i)
// }

// ATV-03
// for (let i = 1; i <= 15; i +=2) {
//     console.log(i)
// }

// for (let i = 1; i <= 15; i++) {
//     if(i % 2 == 1) 
//     continue;
//     console.log(i);
// }

// ATV-04
// for(let i = 1; i <= 10; i++) {
//     let resultado = 7 * i;
//     console.log("7x" + i + " = " + resultado)
// }

// let num = 7

// for(let i = 1; i <= 10; i++){
//     console.log(num * i);
// }

// for(let i = 1; i <= 10; i++){
//     console.log(`7 x ${i} = ${7*i}`);
// }

// ATV-05
// let soma = 0;
// for (let i = 1; i <= 10; i++) {
//     soma += i;
// }
//     console.log("O resultado da soma dos números é: " + soma)

// ATV-06
// let palavra = "javascript";

// for (let i = 0; i < palavra.length; i++) {
//     console.log(palavra[i])
// }

// ATV-07
// for (let i = 0; i <= 50; i+=5) {
//     console.log("Mutliplicadores são: " + i );
// }

// let limite = 50
// for (let i = 0; i <= limite; i+=5) {
//     console.log("Mutliplicadores são: " + i );
// }

// ATV-08

// let soma = 0;
// for (let i = 2; i <= 20; i += 2) {
//   soma += i;
// }
//   console.log("O resultado da soma é:", soma);

// ATV-09

// for (let i = 1; i <= 10; i++) {
//   let quadrado = i ** 2;
//   console.log(`O quadrado de ${i} é ${quadrado}`);
// }

// ATV-10

// let palavra = "**********";

// for (let i = 0; i < palavra.length; i++) {
//     console.log(palavra[i])
// }

// let linha = "";

// for(let i = 1; i <= 10; i++) {
//     linha += "*";
// }
// console.log(linha);

// let linha = "";

// for(let i = 0; i <= 10; i++) {
//     linha += "*";
// }
// console.log(linha);



// let op = 0
// while(op == 0){
//       console.log(`Hello World`);
//       op = 2;
// }

// do {
//     console.log(`Hello World2`);
// } while (op == 0);

// let oi = 10
// while(oi > 0) {
//     console.log("maçã");
//     oi--;
// }


// let oi = 10
// do {

//     let j = 99;
//     j += 235;
//     if(j >= 300) {
//         console.log("J é:" + j);
//     }
//     oi--;
// }   while (oi > 0);

// ATV-01 WHILE
// let contador = 0;

// while(contador <= 10) {
//     console.log(contador);
//     contador++;
// }

// CORREÇÃO

// let contador = 0;
// while (contador >= 0) {
//     console.log(contador);

//     if(contador === 10);
//         break;
//         ++contador;
// }   


// ATV-02 WHILE
// let num = 5;
// while(num < 100) {
//     console.log("Esse número é menor que o solicitado");
//     break;
// }

// let num = 99;
// while (num < 100){
//     console.log("digite o numero mais uma vez");
//     break;
// } while (num > 100){
//     continue;
// }

// ATV-03 WHILE

// let num = 10;

// while(num >= 0) {
//     console.log(num);
//     num--;
//     if (num === 0) {
//         console.log("Lançar!")
//     }
// } 

// CORREÇÃO
// let contador = 10;

// while (contador > 0) {
//     --contador;
    
//     if (contador === 0) {
//         console.log("Lançar!");
//         break;
// }
// console.log(contador)
// }

// ATV-04 WHILE

// let i = 1;
// let soma = 0;
// let quantidade = 5;

// while (i <= quantidade) {
//   let numero = 1 * 2;
//   soma += numero;
//   i++;
// }
// let media = soma / quantidade;
// console.log("Média", media);

// ATV-05 WHILE

// let numero = 51;

// while (numero % 7 !== 0) {
//     numero++;
// }
// console.log("O primeiro multiplo de 7 maior que 50 é: " + numero);

 
// ATV-06 WHILE

// let numeroSorteado = 5;

// while (numeroSorteado !==5) {
//   numeroSorteado = Math.floor(Math.random()* 10 + 1);
//   console.log("Onúmero gerado foi: ", numeroSorteado);
// }
// console.log("O sorteado foi o número: ", numeroSorteado);

// ATV-07 WHILE

// let numero = 1;
// let soma = 0;

// while (soma <= 50) {
//   soma += numero;
//   numero++;
// }
// console.log("Soma final:", soma);

// ATV-08 WHILE

// let numero = 1;

// while (numero <= 1000) {
//   console.log(numero);
//   numero *= 2;
// }

// let numero = 1;

// while (true) {
//   console.log(numero);

//   if (numero > 1000) {
//     break;
//   }

//   numero *= 2;
// }

// ATV-09 WHILE

// let altura = 1;
// let dia = 1;

// while(altura < 15) {
//     console.log("Dia" dia, "Altura", altura, "cm");
//     altura+=2;
//     dia++;
// }     console.log("Dia", dia, "Altura", altura, "cm");

// ATV-10 WHILE

// let i = 100;

// do {
//     console.log("Olá Mundo");
// } while (i < 5);

// let i = 100;

// do {
//     console.log("Olá Mundo");
// i++;
// } while (false);

