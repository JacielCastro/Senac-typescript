class Pessoa {
    nome: string;
    idade: number;
    genero: string;
    constructor(nome: string, idade: number,genero: string){
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    } 
}

const pessoa1 = new Pessoa('valtemir',18,'M');
const pessoa2 = new Pessoa('fabricio',22,'M');
