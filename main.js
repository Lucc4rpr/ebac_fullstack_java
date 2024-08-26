// Função Construtora
function Veiculo(modelo, fabricante, anoModelo, anoFabricação) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricação = anoFabricação;
    this.acelerar = function() {
        console.log('vrum');
    };
    this.exibirDetalhes = function() {
        console.log(`Modelo: ${this.modelo}, Fabricante: ${this.fabricante}, Ano Modelo: ${this.anoModelo}, Ano Fabricação: ${this.anoFabricação}`);
    };
}

// Heranças

function Carro(modelo, fabricante, anoModelo, anoFabricação, portas) {
    Veiculo.call(this, modelo, fabricante, anoModelo, anoFabricação);
    this.portas = portas;
    this.abrirPorta = function() {
        console.log(`${this.portas} portas abertas.`);
    };
}


function Moto(modelo, fabricante, anoModelo, anoFabricação, cavalos) {
    Veiculo.call(this, modelo, fabricante, anoModelo, anoFabricação);
    this.cavalos = cavalos;
    this.derrapar = function() {
        console.log(`${this.modelo} está derrapando`);
    };
}

// Instâncias 

const carroDoJoao = new Carro("Fiesta", "Ford", 2020, 2019, 4);
const carroDaMaria = new Carro("Corolla", "Toyota", 2021, 2020, 4);
const motoDoPedro = new Moto("CB1000", "Honda", 2021, 2020, 500);


carroDoJoao.acelerar();
carroDaMaria.exibirDetalhes();
motoDoPedro.derrapar(); 
