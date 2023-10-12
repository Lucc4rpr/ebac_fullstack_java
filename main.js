$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown(); 
    }); 

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); 
        
        const novoItem = $('<li style="display: none"></li>');
        $(`
            <div class="container">
                <h2>${enderecoDaNovaImagem}</h2>            
            </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(); 
        $('#endereco-imagem-nova').val(''); 
    }); 

    $('ul').on('click','li',function(e){
        $(this).toggleClass('marked'); 
    })
}) 

