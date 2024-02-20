class Funcionario {
    nome: string;
    idade: number;
    genero: string;
    cpf: string;
    email: string;
    telefone: string;
    endereco: string;
    profissao: string;
    especialidade: string;

    constructor(nome: string, idade: number, genero: string, cpf: string, email: string, telefone: string, endereco: string, profissao: string, especialidade: string) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        this.profissao = profissao;
        this.especialidade = especialidade;
    }
}

const profissional1 = new Funcionario('Francisco', 45, 'M', '125487983', 'francisco@gmail.com', '8487827266', 'av apucarana', 'médico', 'cirurgião');

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
}

const paciente1 = new Paciente('Bolsonaro', 45, 'M', 'bolsonaro@gmail.com', '84987872121', 'av itapetinga', 'não', 'banana');

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
}

const consulta1 = new Consulta(new Date("2024-03-29"), 'rua rio branco', new Date("2024-03-29T14:00:00"), '84988223233', profissional1, paciente1, 'cirurgião');

console.log(consulta1);
