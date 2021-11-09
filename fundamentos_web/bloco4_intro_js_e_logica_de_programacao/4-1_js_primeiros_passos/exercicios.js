//1 - Faça programas para:

//Adição (a + b)
let prim = "a";
let seg = "b";
console.log(prim + seg);

//Subtração (a - b)
prim = 10;
seg = 20;
console.log(prim - seg);

//Multiplicação (a * b)
let result = prim * seg;
console.log(result);

//Divisão (a / b)
prim = 100;
seg = 200;
console.log(prim / seg);

//Módulo (a % b)
prim = 2;
if (prim % seg) {
    console.log(true);
}
// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
prim = 80;
seg = 189;

if (prim > seg) {
    console.log(prim);
} else {
    console.log(seg);
}

// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
let terc = 190;

if (prim > seg && prim > terc) {
    console.log(prim);
} else if (seg > prim && seg > terc); {
    console.log(seg);
} else { 
    console.log(terc);
}
    
// 4 -Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const idade = 18;

if (idade >= 1) {
    console.log(positive);
} else if (idade <= 0 );
    console.log(negative);  
} else {
    console.log(0);
}

// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

let ang1;
let ang2;
let ang3;

if (ang1 + ang2 + ang3 == 180) {
    console.log(true);
} else {
    console.log(false);
}
// 6 -Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)

const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

// 7 - Escreva um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 ->C
//Porcentagem >= 60 -> D //
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 101;

  if (nota >= 90 && nota <= 100) {
    console.log("Nota " + "A");
  } else if (nota >= 80 && nota < 90) {
    console.log("Nota " + "B");
  } else if (nota >= 70 && nota < 80) {
    console.log("nota " + "C");
  } else if (nota >= 60 && nota < 70) {
    console.log("Nota " + "D");
  }  else if (nota >= 50 && nota < 60) {
    console.log("Nota " + "E"); 
  }  else if (nota >= 40 && nota < 50) {
    console.log("Nota " + "F");
} else {
    console.log("Erro. " + "Tente novamente!")
}


