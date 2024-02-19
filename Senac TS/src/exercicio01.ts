class Funcionario{
    
    nome: string;
    idade: number;
    genero: string;
    telefone: number; 
    endereco: string;
    proficao: string;
    especialidade: string;

    constructor(nome: string, idade: number, genero: string,telefone: number, endereco: string proficao: string, especialidade: string,){
        this.nome= nome,
        this.idade= idade,
        this.genero= genero,
        this.telefone= telefone,
        this.endereco= endereco,
        this.proficao= proficao,
        this.especialidade= especialidade,
    }

    const proficional1= new Funcionario('jaciel',29,'M',8487827266,'av apucarana','medico','pediatria');

}

class paciente {
    nome: string;
    idade: number;
    genero: string;
    telefone: number;
    endereco: string;
    alergia:string;
    restriçoesDieta: string:

    constructor(nome: string, idade: number, genero: string, telefone: number, endereco: string, alergia: string, restricoesDieta: string,){
        this.nome= nome,
        this.idade= idade,
        this.genero= genero,
        this.endereco= endereco,
    }
}

class Consulta{
    nome: string;
    idade: Date;
    genero: string;
    data: Date;
    local: string;
    horiario: Date;
    medico: string;
    assunto: string;
    alergico: string;
    medicamento:string;
   
}