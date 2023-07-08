import React, { Component } from 'react';

class Input extends Component {
  state = {
    text: '',
  };

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.text === '') {
      return;
    } else {
      this.setState({ text: '' });
      this.props.onSendMessage(this.state.text);
    }
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input
            onChange={(e) => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder=" Messege"
            autoFocus
          />
          <button className="btnSend">
            <img src={require('./media/send.png')} alt="buttonpng" width={'30px'} />
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
