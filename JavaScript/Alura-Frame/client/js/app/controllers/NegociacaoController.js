class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        let self = this;

        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');

        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
            get(target, prop, receiver) {
                if (['adiciona', 'esvazia'].includes(prop) && typeof (target[prop] == typeof (Function))) {
                    return function () {
                        Reflect.apply(target[prop], target, arguments);
                        self._negociacoesView.update(target);
                    }
                }

                return Reflect.get(target, prop, receiver);
            }
        });


        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagem-negociacao'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso!';
        this._mensagemView.update(this._mensagem);
        this._limpaForm();
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._data.value),
            this._quantidade.value,
            this._valor.value
        );
    }

    apagar() {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = "Negociações apagadas com sucesso";
        this._mensagemView.update(this._mensagem);
    }

    _limpaForm() {

        this._data.value = '';
        this._quantidade.value = 1;
        this._valor.value = 0;
        this._data.focus();
    }
}