import React, { Component } from 'react';




class Todo extends Component{

  render() {
    return (
      <div>
      <button onClick = {(event) => this.props.alert(event)}>My button</button>
      </div>

  );
}

}

export default Todo;
