$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Digite o número do seu celular'
    }); 

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'Digite seu CPF'
    }); 

    $('#cep').mask('00000-000', {
        placeholder: 'Digite seu CEP'
    }); 

   $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true 
            },
            cpf: {
                required: true 
            }
        },
        submitHandler: function(form) {
            console.log('formulário enviado corretamente')
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos nesse formulário`)
            }
        }
   })
}) 


