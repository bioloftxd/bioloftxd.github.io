$(document).ready(function () {
    console.log("Carregado!");
    $.ajax({
        url: './Imagens.code-workspace', // Formato JSON
        dataType: 'json',
        success: function (data) {
            data.imagens.forEach(imagem => {
                descricao = '<p>';
                descricao += '<br>Título: ' + imagem.titulo;
                descricao += '<br>Descrição: ' + imagem.descricao;
                descricao += '<br>Caminho: ' + imagem.caminho;
                descricao += '</p>';
                $('#text').append(descricao);
            })
        }
    });
});