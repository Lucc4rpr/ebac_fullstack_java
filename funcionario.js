// Criando uma função construtora 

function Pessoa(nome) {
    //Criando os atributos
    this.nome = nome;

    // Criando um método
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
}

// Criando outra função construtora 

function Funcionario(nome, cargo, salario) {
    //Criando os atributos
    this.cargo = cargo;
    this.salario = salario;

    //Aplicando a Herança, para que Funcionário receba o método criado em Pessoa (método = dizOi)
    Pessoa.call(this, nome);
}


//Utilizando o método criado em Pessoa

funcionario1.dizOi();



//Criando uma nova instância de funcionario

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);



