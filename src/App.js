import React, { Component } from 'react';
import UHF from './components/UHF';
import UHN from './components/UHN';

import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from './store';

class App extends Component {

  stateClick() {
    console.log('Parent state', this.state);        
    console.log('Parent props', this.props);
  }
  
  render() {
    console.log('Parent state', this.state);        
    console.log('Parent props', this.props);
  const FnSensor = state => {
    if(state.cycleFeelings > state.cycleNeeds) {
      return <UHN />
    }
    else
      return <UHF />
  }
   
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Connected Communication Integrative Balancing</h1>
        </header>
        <button onClick={this.stateClick.bind(this)}>find out shit</button>
      <FnSensor />
      
      </div>
      </Provider>
    );
  }
}



export default App;
