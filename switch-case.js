// Questão 1: Dias da semana
// let dia = 3

// switch (dia) {

//     case 1: {
//         console.log("1 é Domingo");
//         break
//     } 
//     case 2: { 
//         console.log("2 é Segunda");
//         break;    
//     }
//     case 3: {
//         console.log("3 é Terça");
//     } break;
//     case 4: {
//         console.log("4 é Quarta");
//         break;
//     }
//     case 5: {
//         console.log("5 é Quinta");
//         break;
//     }
//     case 6: {
//         console.log("6 é Sexta");
//         break;
//     }
//     case 7: {
//         console.log("7 é Sábado");
//         break;
//     }
//     default: {
//         console.log("Não é um dia da semana");
//         break;
//     }

// }

// Questão 2: Meses do ano e estações
// let mes = "Junho";

// switch (mes) {
    
//   case "Janeiro": 
//   case "Fevereiro":
//   case "Março":
//     console.log("Verão");
//     break;
//   case "Abril":
//   case "Maio":
//   case "Junho": 
//     console.log("Outono"); 
//     break; 
//   case "Julho":
//   case "Agosto":
//   case "Setembro":
//     console.log("Inverno");
//     break;
//   case "Outubro":
//   case "Novembro":
//   case "Dezembro":
//     console.log("Primavera");
//     break;
//   default:
//     console.log("Mês inválido");
//     break
// }

// Questão 3: Calculadora
// let num = 10;
// let num1 = 5;
// let operador = ",";
// let resultado;

// switch (operador) { 
//     case "+": { 
//         resultado = num + num1;
//         console.log("Adição: " + resultado);
//         break;
//     }
//     case "-": { 
//         resultado = num - num1;
//         console.log("Subtração: " + resultado);
//         break;
//     }
//     case "*": { 
//         resultado = num * num1;
//         console.log("Multiplicação: " + resultado);
//         break;
//     }
//     case "/": { 
//         resultado = num / num1;
//         console.log("Divisão: " + resultado);
//         break;
//     }
//     default: { 
//         console.log("Operador Inválido")
//         break
//     }
// }

// 04: Sitema de Notas
// console.log(resultado);

// let nota = "B";

// switch (nota) {
//     case "A": {
//         console.log("Excelente");
//         break;
//     }
//     case "B": { 
//         console.log("Bom");
//         break;
//     }
//     case "C": { 
//         console.log("Regular");
//         break;
//     }
//     case "D": {
//         console.log("Ruim");
//         break;
//     }
//     case "F": { 
//         console.log("Reprovado");
//         break;
//     }
//     default: {
//         console.log("Nota desconhecida")
//         break
//     }
// } 

// Questão 5: Menu de lanchonete
// let menu = 3;

// switch (menu) {
//     case 1: {
//         console.log("X-Burguer, R$ 12,00");
//         break;
//     }
//     case 2: {
//         console.log("X-Salada, R$ 8,00");
//         break;
//     }
//     case 3: {
//         console.log("Batat-Frita, R$ 6,00");
//         break;
//     }
//     case 4: {
//         console.log("Refrigerante, R$ 7,00");
//         break;
//     }
//     default: {
//         console.log("Produto não está disponível")
//     }
// }

//  Questão 6: Verificador de Vogal
// let letra = "U";
// switch(letra){
//     case "A":
//     case "E":
//     case "I":
//     case "O":
//     case "U":{
//         console.log("È uma vogal");
//         break;
//     }
//     default: {
//         console.log("É uma consoante ou ou outro caractere");
//         break;
//     }
// }

// Questão 7: Plano de Assinatura
// let assinatura = "Prata";

// switch (assinatura) {
//     case "Bronze": {
//         console.log("Plano Bronze: 200 Mega, Navegação básica, redes sociais e estudos.");
//         break;
//     }
//     case "Prata": {
//         console.log("Plano Prata: 500 Mega, Streaming em HD, home office e videochamadas estáveis.");
//         break;
//     }
//     case "Ouro": {
//         console.log("Plano Ouro: 1 Giga, Jogos online, vídeos em 4K e muitos dispositivos conectados.")
//         break;
//     }
//     default: {
//         console.log("Plano não identificado")
//         break
//     }
// }

// Questão 8: Conversão de moeda
// let reais = 100.00;
// let moeda = "USD";
// let valorconvertido;

// switch (moeda) {
//     case "USD": {
//         console.log(valorconvertido = reais / 5.0);
//         break;
//     }
//     case "EUR": {
//         console.log(valorconvertido = reais / 6.0);
//         break;
//     }
//     case "GBP": {
//         console.log(valorconvertido = reais / 7.0);
//         break;
//     }

//     default: {
//         console.log("Moeda desconhecida");
//         break;
//     }
// }

// Questão 8: Conversão de moeda Alternativa
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


// Questão 9: Faixa Etária
// let categoria = "Adulto"

// switch (categoria) {
//     case "Criança": {
//        console.log("Faixa Etária entre 0 a 12 anos");
//        break;
//     }
//     case "Adolescente": {
//        console.log("Faixa Etária entre 12 a 17 anos");
//        break;
//     }
//     case "Adulto": {
//        console.log("Faixa Etária entre 18 a 59 anos");
//        break;
//     }
//     case "Idoso": {
//        console.log("Faixa Etária apartir dos 60 anos");
//        break;
//     }
//     default: {
//         console.log("Faixa Etária não identificada");
//         break;
//     }
// }

// Questão 10: Pedágio do Veículo
// let veiculo = "Moto";

// switch (veiculo) {
//     case "Carro": {
//         console.log("Esse veículo deve pagar dois pedágios");
//         break;
//     }
//     case "Moto": {
//         console.log("Esse veículo deve pagar um pedágios");
//         break;
//     }
//     case "Caminhão": {
//         console.log("Esse veículo deve pagar três pedágios");
//         break;
//     }
//     default: {
//         console.log("Veículo não identificado");
//         break;
//     }
// }

// Questão 11: Dia útil ou Fim de semana
// let dia = 2;

// switch (dia) {
//     case 2: 
//     case 3:
//     case 4: 
//     case 5: 
//     case 6: {
//         console.log(dia + " é dia útil ");
//         break;
//     }
//     case 1:
//     case 7:{
//         console.log(dia + " é fim de semana");
//         break;
//     }
//     default: {
//         console.log("Dia desconhecido");
//         break;
//     }
// }

// Questão 12: Status de Pedido

// let pedido = 1;

// switch (pedido) {
//     case 1: {
//         console.log("Aguardando");
//         break;
//     }
//     case 2: {
//         console.log("Enviando");
//         break;
//     }
//     case 3: {
//         console.log("Entregue");
//         break;
//     }

//     default: {
//         console.log("Status Inválido");
//         break;
//     }
// }

// Questão 13: Bússola

// let direcao = "O";

// switch (direcao) {
//     case "N": {
//         console.log("Essa é a direção Norte");
//         break;
//     }
//     case "S": {
//         console.log("Essa é a direção Sul");
//         break;
//     }
//     case "L": {
//         console.log("Essa é a direção Leste");
//         break;
//     }
//     case "O": {
//         console.log("Essa é a direção Oeste");
//         break;
//     }
//     default: {
//         console.log("Direção não definida")
//     }
// }

// Questão 14: Cargo

// let cargo = "Admin"

// switch (cargo) {
//     case "Admin": {
//         console.log("Esse cargo permite alterar as configurações do sistema, criar/gerenciar usuários e Instalar plugins");
//         break;
//     }
//     case "Editor": {
//         console.log("Esse cargo permite plubicar/excluir posts, editar/fazer comentários");
//         break;
//     }
//     case "Visitante": {
//         console.log("Esse cargo não permite nenhuma alteração");
//         break;
//     }

//     default: {
//         console.log("Cargo desconhecido")
//         break;
//     }
// }

// Questão 15: Animal

// let animal = "Dragão";

// switch (animal) {
//     case "Cão": {
//         console.log("Au Au");
//         break;
//     }
//     case "Gato": {
//         console.log("Miau");
//         break;
//     }
//     case "Vaca": {
//         console.log("Muu");
//         break;
//     }
//     case "Ovelha": {
//         console.log("Mééé");
//         break;
//     }

//     default: {
//         console.log("Animal não listado");
//         break;
//     }
// }

// let cor =  "Azul";

// switch (cor) {
//     case "Vermelho": {
//         console.log("#FF0000");
//         break;
//     }
//     case "Azul": {
//         console.log("#0000FF");
//         break;
//     }
//     case "Amarelo": {
//         console.log("#FFFF00");
//         break;
//     }
//     default: {
//         console.log("Cor não identificada")
//     }
// } 