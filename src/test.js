import React, { Component } from 'react'

let buttonStyle = {
    size: '300px',
    color: 'red'
  };

let arr = ["hi", "this", "is", "a", "test"];

export default class Test extends Component {
    // React functions

  render() {

    const makeButtons = arr.map(ar => (
        <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}
        >{ar}</button>
    ))
  
    // functions and stuff


    return (
        // jsx
        <div>
        {makeButtons}
        </div>
       //<button style={buttonStyle}>{this.}</button>
    )
  }
}