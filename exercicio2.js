const av1 = 10.0
const av2 = 7.0
const av3 = 4.0
const media = (av1+av2+av3)/3

if (media>= 6.0){
    console.log("Aprovado com media 7.0");
}else{
    console.log("Reprovado");
}

11/3
laço repitido

 const lanches = ["x-egg", "x-ovo", "x-bacon", "x-tudo", "x-frango"];
    const precos = [12,15,15,20,12]
    const tamanho = lanches.length
    let contador = 0;

    while(contador < tamanho){
        console.log(lanches[contador] + " - R$" + precos[contador]);
        contador = contador + 1;
    }


arrays
//Listas
const lanches = ["x-egg", "x-ovo", "x-bacon", "x-tudo", "x-frango"];
//Lista de Number:
const precos = [12,15,15,20,12]
console.log(lanches);
console.log(precos);
//acessar um item especifico da lista:
console.log(lanches [2] + "-R$" + precos [2])
//x-egg

const tamanho = lanches.length
console.log(tamanho)



