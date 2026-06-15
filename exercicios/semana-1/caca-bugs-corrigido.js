// Trecho A

function validarEmail(email) {
  // Adicionada expressão regular para validar email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);

}

console.log(validarEmail("usuario@email.com"));
console.log(validarEmail("@@@@"));
console.log(validarEmail("usuario@"));
console.log(validarEmail("sem-arroba.com"));

// Trecho B

function buscarProduto(produtos, nome) {
  // Removida a igualdade do laço for para evitar cair em posição inválida do array
  for (let i = 0; i < produtos.length; i++) {
    // Alterada a comparação para garantir que, além do conteúdo, o tipo das variáveis seja o mesmo
    if (produtos[i].nome === nome) {
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

// Trecho C

function aplicarDesconto(preco, desconto) {
  // Adicionado uma validação para evitar descontos inválidos
  if (desconto < 0 || desconto > 100) {
    return "Desconto inválido";
  }

  // Ajustado o cálculo de preço final com a fórmula correta de desconto com porcentagens
  const precoFinal = preco - (preco * desconto / 100);
  return precoFinal;
}

console.log(aplicarDesconto(100, 10));
console.log(aplicarDesconto(100, 110));
console.log(aplicarDesconto(100, -20));

// Trecho D

function formatarPreco(valor) {
  // Validação de checagem de tipo e valor para evitar que o usuário passe valores inválidos
  if(typeof valor !== "number" || isNaN(valor)) {
    return "Valor inválido";
  }

  return "R$" + valor.toFixed(2);
}

console.log(formatarPreco(49.9));
console.log(formatarPreco(100));
console.log(formatarPreco("abc"));
console.log(formatarPreco(null));