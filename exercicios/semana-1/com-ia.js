// Tempo de início: 02:45
// Função que inverte uma string
// Exemplo: "hello" → "olleh"

function inverterString(str) {
    return str.split('').reverse().join('');
}

console.log(inverterString("hello")); // Output: "olleh"

// Função que conta as vogais em uma string (maiúsculas e minúsculas)
// Exemplo: "programacao" → 5

function contarVogais(str) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;
    for (let char of str) {
        if (vogais.includes(char)) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVogais("programacao")); // Output: 5

// Função que encontra o maior número em um array
// Exemplo: [3, 7, 2, 9, 1] → 9

function encontrarMaiorNumero(arr) {
    if (arr.length === 0) return null; // Retorna null para arrays vazios
    let maior = arr[0];
    for (let num of arr) {
        if (num > maior) {
            maior = num;
        }
    }
    return maior;
}

console.log(encontrarMaiorNumero([3, 7, 2, 9, 1])); // Output: 9

// Função que remove valores duplicados de um array
// Exemplo: [1, 2, 2, 3, 3, 4] → [1, 2, 3, 4]

function removerDuplicados(arr) {
    return [...new Set(arr)];
}

console.log(removerDuplicados([1, 2, 2, 3, 3, 4])); // Output: [1, 2, 3, 4]

// Tempo de fim: 02:46
// Tempo total COM IA: ___ minutos