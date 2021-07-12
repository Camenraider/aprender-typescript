var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Apartir de 2015 com o ES6 habilita o uso de classes
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var data = new Data(1, 1, 2021);
console.log(data.dia);
// Forma mais simples de declarar uma classe
// direto no método construtor da classe
var Data2 = /** @class */ (function () {
    // protected dia: number;
    // protected mes: number;
    // protected ano: number;
    function Data2(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
    return Data2;
}());
// Modificadores de acesso
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 220; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    Object.defineProperty(Carro.prototype, "getVelocidadeAtual", {
        get: function () {
            return this.velocidadeAtual;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "setVelocidadeAtual", {
        set: function (value) {
            this.velocidadeAtual = value;
        },
        enumerable: false,
        configurable: true
    });
    Carro.prototype.alterarVelocidade = function (delta) {

        if (this.getVelocidadeAtual >= 0 && this.getVelocidadeAtual <= this.velocidadeMaxima) {
            this.velocidadeAtual = this.getVelocidadeAtual + delta;
        }
        else if (this.getVelocidadeAtual >= this.getVelocidadeAtual - delta && delta < 0) {
            this.setVelocidadeAtual = this.getVelocidadeAtual - delta;
        }
    };
    Carro.prototype.acelerar = function () {
        this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        this.alterarVelocidade(-5);
    };
    Carro.prototype.mostrarVel = function () {
        console.log(this.getVelocidadeAtual);
    };
    return Carro;
}());
var carro = new Carro('corolla', 'toyota', 250);
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.mostrarVel();
//------------- Herança --------------------------------
var Camaro = /** @class */ (function (_super) {
    __extends(Camaro, _super);
    function Camaro() {
        var _this = _super.call(this, 'Chevrolet', 'Camaro', 340) || this;
        _this.turbo = false;
        return _this;
    }
    Camaro.prototype.ligarTurbo = function () {
        this.turbo = true;
    };
    Camaro.prototype.acelerar = function () {
        if (this.turbo === true) {
            this.alterarVelocidade(10);
        }
        else
            this.alterarVelocidade(5);
    };
    return Camaro;
}(Carro));
var camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.mostrarVel();
camaro.ligarTurbo();
camaro.acelerar();
camaro.mostrarVel();
