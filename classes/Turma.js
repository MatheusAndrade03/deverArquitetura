
class Turma {
    #codigo;
    #nota;

    constructor(codigo, nota) {
        this.#codigo = codigo;
        this.#nota = nota;
    }


    aprovado() {
        return this.#nota >= 6.0;
    }

    
    getCodigo() {
        return this.#codigo;
    }

    getNota() {
        return this.#nota;
    }

    setNota(novaNota) {
        this.#nota = novaNota;
    }
}

module.exports = Turma;
