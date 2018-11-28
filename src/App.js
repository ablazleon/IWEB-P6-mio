import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        Guay
      </div>
    );
  }
}

function mapStateToProps(state){
    return{
        ...state
    };
}

export default connect(mapStateToProps)( App );
