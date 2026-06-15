// Tempo de início: 01:55
// a) inverterString(str)
// Recebe uma string e retorna ela invertida.
// Exemplo: "hello" → "olleh"
// Exemplo: "Shopify" → "yfipohS"

function inverterString(str) {
    return str.split("").reverse().join("");
}

console.log(inverterString("Shopify"));

//10 minutos

// b) contarVogais(str)
// Recebe uma string e retorna a quantidade de vogais (a, e, i, o, u).
// Deve funcionar com maiúsculas e minúsculas.
// Exemplo: "programacao" → 5
// Exemplo: "Shopify" → 2

function contarVogais(str) {
    const vogais = /[aeiou]/gi;
    const totalVogais = str.match(vogais) 
    return totalVogais.length;
}

console.log(contarVogais("teste"))

// 16 minutos

// c) encontrarMaior(numeros)
// Recebe um array de números e retorna o maior valor.
// Exemplo: [3, 7, 2, 9, 1] → 9
// Exemplo: [10, 10, 10] → 10// 

function encontrarMaior(numeros) {
    let maiorValor = 0;
    for (i=0; i< numeros.length; i++) {
        if( maiorValor < numeros[i]) maiorValor = numeros [i];
    }

    return maiorValor;
}

console.log(encontrarMaior([3, 7, 2, 9, 1]))

// 3 minutos

// d) removerDuplicatas(array)
// Recebe um array e retorna um novo array sem valores duplicados.
// Exemplo: [1, 2, 2, 3, 3, 4] → [1, 2, 3, 4]
// Exemplo: ["a", "b", "a", "c"] → ["a", "b", "c"]

function removerDuplicatas(array) {
    let novaArray = [];

    for (i=0; i<array.length; i++) {
        if(!novaArray.includes(array[i])) {
            novaArray.push(array[i]);
        }
    }
    return novaArray;
}

console.log(removerDuplicatas([1, 2, 2, 3, 3, 4]))
console.log(removerDuplicatas(["a", "b", "a", "c"]))


// 10 minutos

// Tempo de fim: 02:34
// Tempo total SEM IA: 39 minutos