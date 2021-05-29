const mongoose = require('mongoose');


const Produtos = moongose.Schema({
    nome: {
        type: String,
        required: true,
    },
    imagem: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    preco: {
        type: Number,
        default: 0,
        required: true
    },
});

const Produtos = mongoose.model('produtos', Produtos);

module.exports = Produtos
