import React, { Component } from 'react';

class ExempluComponenta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numar: 42,
      text: "Salut, lume!",
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default ExempluComponenta;







