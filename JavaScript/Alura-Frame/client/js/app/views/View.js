class View {

    constructor(elemento) {

        this._elemento = elemento;
    }

    template(model) {

        throw new Error('A classe template precisa ser implementada!');

    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }
}