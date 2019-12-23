import React, { Component } from "react";
import $ from "jquery";
import InputCustomizado from "./components/InputCustomizado";
import BotaoSubmitcustomizado from "./components/BotaoSubmitCustomizado";

export class FormularioAutor extends Component {
  constructor() {
    super();
    this.state = { nome: "", email: "", senha: "" };

    this.enviaForm = this.enviaForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }

  setNome(evento) {
    this.setState({ nome: evento.target.value });
  }

  setEmail(evento) {
    this.setState({ email: evento.target.value });
  }

  setSenha(evento) {
    this.setState({ senha: evento.target.value });
  }

  enviaForm(evento) {
    evento.preventDefault();

    $.ajax({
      url: "https://cdc-react.herokuapp.com/api/autores",
      contentType: "aplication/json",
      dataType: "json",
      type: "post",
      data: JSON.stringify({
        nome: this.state.nome,
        email: this.state.email,
        senha: this.state.senha
      }),
      success: function(resposta) {
        this.setState({ lista: resposta });
      }.bind(this),
      error: function(resposta) {
        console.log(`erro: ${resposta}`);
      }
    });
  }

  render() {
    return (
      <div className="pure-form pure-form-aligned">
        <form
          className="pure-form pure-form-aligned"
          onSubmit={this.enviaForm}
          method="post"
        >
          <InputCustomizado
            id="nome"
            type="text"
            name="nome"
            value={this.state.nome}
            onChange={this.setNome}
            label="Nome"
          />
          <InputCustomizado
            id="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.setEmail}
            label="Email"
          />
          <InputCustomizado
            id="senha"
            type="password"
            name="senha"
            value={this.state.senha}
            onChange={this.setSenha}
            label="Senha"
          />
          <BotaoSubmitcustomizado label="Gravar" />
        </form>
      </div>
    );
  }
}

export class TabelaAutores extends Component {
  constructor() {
    super();
    this.state = { lista: [] };
  }

  componentDidMount() {
    $.ajax({
      url: "https://cdc-react.herokuapp.com/api/autores",
      dataType: "json",
      success: function(resposta) {
        this.setState({ lista: resposta });
      }.bind(this)
    });
  }

  render() {
    return (
      <div>
        <table className="pure-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lista.map(autor => {
              return (
                <tr key={autor.id}>
                  <td>{autor.nome}</td>
                  <td>{autor.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
