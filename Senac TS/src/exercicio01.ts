// CRIANDO UMA CLASSE
class Pessoa {

    nome: string;
    dataDeNascimento: Date;
    telefone: string;
    email: string;
    endereco: string;
    cpf: string;
    genero?: string;
    // CRIANDO O UM METODO CONSTRUCTOR
    constructor(nome: string, dataDeNascimento: Date, telefone: string, email: string, endereco: string, cpf: string, genero?: string){
    // INICIALIZANDO O METODO CONSTRUTOR
    this.nome= nome;
    this.dataDeNascimento= dataDeNascimento;
    this.telefone= telefone;
    this.email= email;
    this.endereco= endereco;
    this.cpf= cpf;
    this.genero= genero;

    }
    // CRIANDO UM MOSTRADOR DE DADOS 
    mostradordedados(){

        console.log('--------DADOS DO FUNCINARIO--------')
        console.log(`NOME DO USUARIO:_____________________ ${this.nome}`)
        console.log(`DATA DE NASCIMENTOS:_________________ ${this.dataDeNascimento.toLocaleDateString('pt-br')}`)
        console.log(`TELEFONE:____________________________ ${this.telefone}`)
        console.log(`ENDERECO:____________________________ ${this.endereco}`)
        console.log(`CPF:_________________________________ ${this.cpf}`)
        if (this.genero) {  // SE ALGUM ATRIBUTO FOR OPSONAL CRIAR UM ( IF ) PARA PODER CHAMADA O ATRIBUTO 
            console.log(`GENERO:______________________________ ${this.genero}`)
        }

    }
}

class Funcionario extends Pessoa{
    
    profissao: string;
    especialidade: string;

    constructor(nome: string, dataDeNascimento: Date, genero: string, cpf: string, email: string, telefone: string, endereco: string, profissao: string, especialidade: string) {
       // super= . Isso é necessário quando uma classe estende outra classe e queremos inicializar tanto a parte da classe atual quanto a parte da classe pai
        super(nome,dataDeNascimento,telefone,email,endereco,cpf,genero)
        this.profissao= profissao;
        this.especialidade= especialidade;
    }

    mostradados(){
        super.mostradordedados() 
        console.log(`EMAIL:_______________________________ ${this.email}`);
        console.log(`PROFISSAO:___________________________ ${this.profissao}`);
        console.log(`ESPECIALIDADE:_______________________ ${this.especialidade}`);
        console.log('------------------------------------------------------------------')
    }
}

// CRIANDO UMA VARIAVEL LOCAL CONST PARA CHAMA A CLASSE
const profissional1 = new Funcionario('Francisco',new Date('1995-1-18'), 'MASCULINO', '125487983', 'francisco@gmail.com', '8487827266','AV APUCARANA ', 'médico', 'cirurgião');
// EMPREMINDO O RESULTADOS
console.log(profissional1.mostradados())

class Paciente {

    nome: string;
    dataDeNascimento: Date;
    genero: string;
    email: string;
    telefone: string;
    endereco: string;
    alergias?: string;
    restricoesDieta: string;

    // sempre quando tiver um paramito opconal coloca um paramito obrigatoria antes
    constructor(nome: string, dataDeNascimento: Date, genero: string, email: string, telefone: string, endereco: string,  dieta: string, alergias?: string) {
       
        this.nome = nome;
        this.dataDeNascimento= dataDeNascimento;
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
        console.log(`idade do paciente: ${this.dataDeNascimento.toLocaleDateString('pt-br')}`)
        console.log(`genero: ${this.genero}`)
        console.log(`email: ${this.email}`)
        console.log(`telefone: ${this.telefone}`)
        console.log(`endereco: ${this.endereco}`)
        console.log(`alergias: ${this.alergias}`)
        console.log(`restricoesDieta: ${this.alergias}`)
        console.log(`-----------------------------------------------------------------`)

    }

}

const paciente1 = new Paciente('Bolsonaro',new Date('1995-01-18'), 'M', 'bolsonaro@gmail.com', '84987872121', 'av itapetinga', 'não', 'faca');
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
        console.log(`-------- DADOS DA SONSULTA --------`)
        console.log(`DATA:  ${this.data.toLocaleDateString(`pt-br`)}`)
        console.log(`LOCAL:  ${this.local}`)
        console.log(`HORARIO:  ${this.horario.getTime()}`)
        console.log(`TELEFONE:  ${this.telefone}`)
        console.log(`MEDICO:  ${this.medico}`)
        console.log(`PACIENTE:  ${this.paciente}`)
        console.log(`ESPECIALIDADE:  ${this.especialidade}`)
        console.log(`-----------------------------------------------------------------`)

    }

}

const consulta1 = new Consulta(new Date("2024-03-29"), 'rua rio branco', new Date("2024-02-21T14:00:00"), '84988223233', profissional1, paciente1, 'cirurgião');

console.log(consulta1.mostrandodados()); 
