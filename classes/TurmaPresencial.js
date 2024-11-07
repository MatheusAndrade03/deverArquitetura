
const Turma = require('./Turma');

class TurmaPresencial extends Turma {
    #frequencia;

    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this.#frequencia = frequencia;
    }

    aprovado() {
        return super.aprovado() && this.#frequencia >= 75;
    }

    getFrequencia() {
        return this.#frequencia;
    }

    setFrequencia(novaFrequencia) {
        this.#frequencia = novaFrequencia;
    }
}

module.exports = TurmaPresencial;
