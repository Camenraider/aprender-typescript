// Apartir de 2015 com o ES6 habilita o uso de classes
class Data {
    public dia: number;
    public mes: number;
    public ano: number;

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const data = new Data(1, 1, 2021);
console.log(data.dia);

// Forma mais simples de declarar uma classe
// direto no método construtor da classe
class Data2 {
    // protected dia: number;
    // protected mes: number;
    // protected ano: number;

    constructor(public dia: number, public mes: number, public ano: number = 1970) { // valore default de ano 1970
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
}

// Modificadores de acesso
class Carro {
    private velocidadeAtual: number = 0;

    get getVelocidadeAtual() {
        return this.velocidadeAtual;
    }
    set setVelocidadeAtual(value: number) {
        this.velocidadeAtual = value;
    }

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) { }

    alterarVelocidade(delta: number) {
        // validações de aceleração e frenagem
        // this.velocidadeAtual = xxx;

        /*
        const novaVelocidade: number = this.velocidadeAtual + delta;
       
        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima){
            this.velocidadeAtual = novaVelocidade;
        } else {
                this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0; 
        }
    }*/

        //const novaVelocidade: number = this.velocidadeAtual + delta;

        if (this.getVelocidadeAtual >= 0 && this.getVelocidadeAtual <= this.velocidadeMaxima) {
            this.velocidadeAtual = this.getVelocidadeAtual + delta;
        }
        else if (this.getVelocidadeAtual >= this.getVelocidadeAtual - delta  && delta < 0){
            this.setVelocidadeAtual = this.getVelocidadeAtual - delta;
        }  
    }

    acelerar() {
        this.alterarVelocidade(5);

    }

    frear() {
        this.alterarVelocidade(-5);
    }

    mostrarVel() {
        console.log(this.getVelocidadeAtual);
    }
}

const carro = new Carro('corolla', 'toyota', 250)
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.mostrarVel();

//------------- Herança --------------------------------
class Camaro extends Carro{
    private turbo: boolean = false;

    constructor(){
        super('Chevrolet', 'Camaro', 340);
    }

    ligarTurbo(){
        this.turbo = true;
    }
    acelerar(){
        
        if(this.turbo === true) {
            this.alterarVelocidade(10);
        } else this.alterarVelocidade(5);
    }
}

    const camaro = new Camaro();
    camaro.acelerar();
    camaro.frear();
    camaro.mostrarVel();
    camaro.ligarTurbo();
    camaro.acelerar();
    camaro.mostrarVel();