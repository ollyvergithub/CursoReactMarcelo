import ClassePessoa from './ClassePessoa';
const pessoa = new ClassePessoa('Ollyver Ottoboni, agora Pietra - Alterado de novo - Outra vez - 2');
console.log(pessoa.toString());

const produto = {
    nome: 'Caneta BIC Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {

    return {...objeto}
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta AZUL BIC';

console.log('Produto: ', produto, 'Novo Produto: ', novoProduto);