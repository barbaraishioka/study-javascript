/* 

CONTROLE DE FLUXO - CONDICIONAIS - IF / ELSE

if -> SE
else -> SENÃO


if (condition true) { SE a condição é verdadeira
  executar o que tiver aqui
} else { SENÃO for verdadeira
  executar o que tiver aqui
}

*/

const idade = 15;

if (idade >= 18) {
  console.log("A pessoa é MAIOR de idade");
} else {
  // else não é obrigatório
  console.log("A pessoa é MENOR de idade");
}

// detalhe: pode ter if sem else, mas não else sem if
