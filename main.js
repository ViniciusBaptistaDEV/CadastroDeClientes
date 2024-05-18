$(document).ready(function(){

    $('#botao-iniciar').click(function(){
        $('.corpo-formulario').slideDown(2000);
    });

    $('#botao-fechar').click(function(){
        $('.corpo-formulario').slideUp(2000);
    });

    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: false
            },
            cep: {
                required: false
            }
        },

        submitHandler: function(form){
            alert(`Os dados foram salvos com sucesso!`);
        },

        invalidHandler: function(evento, validator){
            let camposincorretos = validator.numberOfInvalids();

            if (camposincorretos){
                alert(`Existem campos que estão faltando serem preenchidos!\nFavor preencher antes de finalizar o cadastro.`);
            }
        }

    })


})