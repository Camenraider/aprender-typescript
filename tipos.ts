// Boolean
let contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = 'João'; // usar 's' letra minuscula

// Array
const idades: number[] = [23,28,41];
const idades2: Array<number> = [1,4,564,2,21];

// Tuple
let jogadores: [string,number,boolean];
jogadores = ['Paulo', 3, true];

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const SituacaoDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any aceita qualquer coisa
const retornoDaApi: any[] = [123,'Joao', false]
const retornoDaApi2: any = {
    //...
}

// Void não retorna nada
function printarNaTela(msg: string):void {
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object não é um tipo primitivo
function criarObj(Pessoa: object){
    //...
}
criarObj({
    nome: 'Maria',
    idade: 24,
    isUser: false
})

// Never
function loopInfinito(): never {
    while(true) { }
}

function erro(menssagem: string): never{ 
    throw new Error(menssagem);  
}

function falha(){
    return erro('Algo falhou'); // usando a função erro dentro da função falha
}

// Union Types
function exibirNota(nota:number | string){
    console.log(`A nota é ${nota}`)
}
exibirNota('10');
exibirNota(10);

// Alias 
type Funcionario = {
    nome:string;
    sobrenome:string;
    dataNascimento:Date;
}

//type Funcionarios = Array<Funcionarios>;
//const funcionarios: Funcionarios = ['Paulo','Fulano','Ciclano'];
const funcionarios: Funcionario[] = [{
        nome : 'Paulo',
        sobrenome : 'Silva',
        dataNascimento : new Date()
    },{
        nome : 'Fernanda',
        sobrenome : 'Lima',
        dataNascimento : new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]){
    for (let funcionario of funcionarios) {
        console.log('Nome do funcionário: ',funcionario.nome);
    }
}

// valores nulos ou opcionais
let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string; // usando o ponto de interrogação o campo fica opcional
}

const contato: Contato = {
    nome: 'Vitor',
    telefone1: '12336498'
}

// Type Assertion
const minhaIdade: any = 90;
(minhaIdade as number).toString(); 
(<number>minhaIdade).toString(); // outra forma de transformar em string

//const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);




