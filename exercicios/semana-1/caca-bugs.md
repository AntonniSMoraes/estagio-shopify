// Trecho A

function validarEmail(email) {
    if (email.includes("@")) {
        return true;
    }
    return false;
}

// Testes
console.log(validarEmail("usuario@email.com")); // true
console.log(validarEmail("@@@@")); // true <- Deveria ser true?
console.log(validarEmail("usuario@")); // true <- Deveria ser true?
console.log(validarEmail("sem-arroba.com")); // false

// O bug está no sistema de validação criado, que valida a variável checando apenas se ela possui o caractere "@", ignorando o resto da string, deixando de checar o padrão de email. Para correção, podemos ajustar a função validarEmail para checar o padrão de escrita da string recebida com regex. Assim, uma forma válida de correção seria substituir o conteúdo da função por:   
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
// Desta forma, será checado o padrão da string para garantir que ela siga o formato de email (usuario@email.com).

// Trecho B

function buscarProduto(produtos, nome) {
    for (let i = 0; i <= produtos.length; i++) {
        if (produtos[i].nome == nome) {
        return produtos[i];
        }
    }
    return null;
}

const lista = [
    { nome: "Camiseta", preco: 49.90 },
    { nome: "Calça", preco: 89.90 },
    { nome: "Tênis", preco: 199.90 }
];
    
console.log(buscarProduto(lista, "Calça"));
console.log(buscarProduto(lista, "Boné"));

// Os bugs nesse trecho se aplicam ao laço de repetição e ao teste if. Quando um laço é declarado com <= ou >=, ele inclui o índice da variável, ou seja, se o laço começar na posição 0 e o objeto tiver 5 itens, o laço andará 6 casas, 0 a 5, mas se utilizarmos apenas <(nesse caso), se moverá n-1 casas, parando dentro das posições válidas. Quanto a comparação do if, não está necessariamente errado, pois tanto == quanto === fazem comparações, no entanto, pode ser um problema à integridade do código, pois == trabalha convertendo as variáveis comparadas para o mesmo tipo, o que significa que, se uma string "123" fosse comparada com um int 123, o resultado seria verdadeiro. É de extrema importância tomar cuidado com esse detalhe, principalmente quando estamos falando de controle de produtos, pois, em um e-commerce, o mínimo erro pode ocasionar prejuízo a reputação e ao financeiro da empresa.

// Trecho C

function aplicarDesconto(preco, desconto) {
    const precoFinal = preco - desconto;
    return precoFinal;
}
// Espera-se: 10% de desconto em R$100 = R$90
console.log(aplicarDesconto(100, 10)); // 90 ← Ok, mas...
console.log(aplicarDesconto(100, 110)); // -10 ← Preço negativo?!
console.log(aplicarDesconto(100, -20)); // 120 ← Desconto negativo aumenta o preço?

// Neste exemplo, o cálculo de desconto está incorreto, subtraindo o valor que devia ser uma porcentagem diretamente do preço, o que no primeiro exemplo funcionou, mas apenas pelo fato de que 10% de 100 é 10. Com o cálculo incorreto e nenhuma validação, o trecho C permitia passar um desconto maior do que o preço, retornando um valor negativo, ou, quando adicionado um desconto negativo, retornando um valor superior ao preço original. Neste caso, um simples teste para evitar um desconto menor que 0 e maior que 100 pode evitar valores bizarros, e para que o desconto seja o correto, atualizamos o cálculo de desconto, dividindo a porcentagem por 100 e multiplicando pelo preço antes de subtrair o valor, obtendo o preço descontado correto.

// Trecho D

function formatarPreco(valor) {
return "R$" + valor.toFixed(2);
}
console.log(formatarPreco(49.9));// R$49.90
console.log(formatarPreco(100));// R$100.00
console.log(formatarPreco("abc"));// ??? ← O que acontece?
console.log(formatarPreco(null));// ??? ← E agora?

// Neste trecho fazemos uso da função toFixed, que é exclusiva do tipo number, e quando usada com qualquer valor que não seja número, causa um erro de tipagem, seja o valor uma string, booleano, null ou undefined, o retorno será o mesmo. Para evitarmos isso, precisamos adicionar uma validação de tipagem, impedindo que valores inválidos alcancem esse ponto do código.