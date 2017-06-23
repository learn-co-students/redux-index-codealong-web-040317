import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return(
      <div>
        <li>{this.props.text}</li>
      </div>
    );
  }
};

export default Todo;
