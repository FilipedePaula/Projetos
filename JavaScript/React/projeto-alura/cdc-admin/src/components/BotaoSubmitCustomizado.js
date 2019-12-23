import React, { Component } from "react";

export default class BotaoSubmitcustomizado extends Component {
  render() {
    return (
      <div className="pure-control-group">
        <button type="submit" className="pure-button pure-button-primary">
          {this.props.label}
        </button>
      </div>
    );
  }
}
