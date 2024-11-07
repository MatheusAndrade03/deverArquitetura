
const Aluno = require('./classes/Aluno');
const Turma = require('./classes/Turma');
const TurmaPresencial = require('./classes/TurmaPresencial');

// Criando uma instância de Aluno
const aluno1 = new Aluno('João', 'joao123', '123456');

// Criando uma instância de Turma
const turma1 = new Turma('MAT101', 7.5);
console.log(`O aluno foi aprovado na turma? ${turma1.aprovado()}`); // true

// Criando uma instância de TurmaPresencial
const turmaPresencial1 = new TurmaPresencial('MAT101', 8.0, 80);
console.log(`O aluno foi aprovado na turma presencial? ${turmaPresencial1.aprovado()}`); 


turmaPresencial1.setFrequencia(70);
console.log(`O aluno foi aprovado na turma presencial? ${turmaPresencial1.aprovado()}`); 
