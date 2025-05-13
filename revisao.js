/* Arquivo base para realização da Atividade de Revisão do 1º TRIMESTRE */

// 1) Criação de variável de texto e numérica
let nome = "Kauã";

let numeroChamada = 10;

// 2) Criação de uma lista

let jogos = ["Fortnite", "Fifa" , "Futsal"];
console.log(jogos); 

// 3) Utilização de um laço while
let i = 0;

while (i < 3) {
    console.log(jogos[i]);
    i++;
  }

// 4) Criação de um objeto

let filmeFavorito = {
    nome: "Kauã",
    nomeFilme: "American Pie",
    anoLancamento: 1999,
    notaIMDb: 7.0

}
console.log(filmeFavorito);
// 5) Utilização de if-else

if (filmeFavorito.notaIMDb <= 4.0) {
    console.log("O filme possui uma nota considerada baixa.");
  } else if (filmeFavorito.notaIMDb > 4.0 && filmeFavorito.notaIMDb <= 7.0) {
    console.log("O filme é considerado razoável.");
  } else if (filmeFavorito.notaIMDb > 7.0) {
    console.log("O filme é muito bom!");
  }

// 6) Criação de uma função que analisa os dados da previsão do tempo
const previsaoTempo = [
    {
        dia: "segunda",
        temperaturaMin: 14,
        temperaturaMax: 19,
        chanceDeChuva: 10
    },
    {
        dia: "terça",
        temperaturaMin: 13,
        temperaturaMax: 20,
        chanceDeChuva: 10
    },
    {
        dia: "quarta",
        temperaturaMin: 15,
        temperaturaMax: 22,
        chanceDeChuva: 80
    },
    {
        dia: "quinta",
        temperaturaMin: 13,
        temperaturaMax: 18,
        chanceDeChuva: 60
    },
    {
        dia: "sexta",
        temperaturaMin: 12,
        temperaturaMax: 16,
        chanceDeChuva: 40
    }
]

function verificaChuva(previsao) {
    previsao.forEach(dia => {
        if (dia.chanceDeChuva > 50) {
            console.log(`${dia.dia}: Levar guarda-chuva`);
        } else {
            console.log(`${dia.dia}: Tempo agradável`);
        }
    });
}

verificaChuva(previsaoTempo);
