

class Funcionario{
    
    nome: string;
    dataNascimento: Date;
    genero: string;
    cpf: string;
    email: string;
    telefone: string;
    endereco: string;
    profissao: string;
    especialidade: string;

    constructor(nome: string, dataNascimento: Date, genero: string, cpf: string, email: string, telefone: string, endereco: string, profissao: string, especialidade: string) {
        this.nome = nome;
        this.dataNascimento= dataNascimento;
        this.genero = genero;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        this.profissao = profissao;
        this.especialidade = especialidade;
    }

    mostradados(){
        console.log(`------------dados do funcionario------------`)
        console.log(`nome do usuario:${this.nome}`)
        console.log(`idade:${this.dataNascimento.toLocaleDateString(`pt-br`)}`)
        console.log(`genero: ${this.genero}`)
        console.log(`cpf: ${this.cpf}`);
        console.log(`email: ${this.email}`);
        console.log(`telefone:${this.telefone}`);
        console.log(`endereco:${this.endereco}`);
        console.log(`profissao:${this.profissao}`);
        console.log(`Especialidade:${this.especialidade}`);
    }

}

const profissional1 = new Funcionario('Francisco',new Date(1995-1-18), 'M', '125487983', 'francisco@gmail.com', '8487827266', 'av apucarana', 'médico', 'cirurgião');

console.log(profissional1.mostradados())

class Paciente {
    nome: string;
    idade: number;
    genero: string;
    email: string;
    telefone: string;
    endereco: string;
    alergias?: string;
    restricoesDieta: string;
    // sempre quando tiver um paramito opconal coloca um paramito obrigatoria antes
    constructor(nome: string, idade: number, genero: string, email: string, telefone: string, endereco: string,  dieta: string, alergias?: string) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        this.alergias = alergias;
        this.restricoesDieta = dieta;
    }

    mostrandodados(){
        console.log(`----- mostrando os dados do paciente-----`)
        console.log(`nome do paciente: ${this.nome}`)
        console.log(`idade do paciente: ${this.idade}`)
        console.log(`genero: ${this.genero}`)
        console.log(`email: ${this.email}`)
        console.log(`telefone: ${this.telefone}`)
        console.log(`endereco: ${this.endereco}`)
        console.log(`alergias: ${this.alergias}`)
        console.log(`restricoesDieta: ${this.alergias}`)
        console.log(`-----------------------------------------------------------------`)

    }

}

const paciente1 = new Paciente('Bolsonaro', 45, 'M', 'bolsonaro@gmail.com', '84987872121', 'av itapetinga', 'não', 'faca');
console.log(paciente1.mostrandodados())



class Consulta {
    data: Date;
    local: string;
    horario: Date;
    telefone: string;
    medico: Funcionario;
    paciente: Paciente;
    especialidade: string;

    constructor(data: Date, local: string, horario: Date, telefone: string, medico: Funcionario, paciente: Paciente, especialidade: string) {
        this.data = data;
        this.local = local;
        this.horario = horario;
        this.telefone = telefone;
        this.medico = medico;
        this.paciente = paciente;
        this.especialidade = especialidade;
    }

    mostrandodados(){

        console.log(`data:  ${this.data.toLocaleDateString(`pt-br`)}`)
        console.log(`local:  ${this.local}`)
        console.log(`horario:  ${this.horario.getTime()}`)
        console.log(`telefone:  ${this.telefone}`)
        console.log(`medico:  ${this.medico}`)
        console.log(`paciente:  ${this.paciente}`)
        console.log(`especialidade:  ${this.especialidade}`)
        console.log(`-----------------------------------------------------------------`)

    }

}

const consulta1 = new Consulta(new Date("2024-03-29"), 'rua rio branco', new Date("2024-02-21T14:00:00"), '84988223233', profissional1, paciente1, 'cirurgião');

console.log(consulta1.mostrandodados());
