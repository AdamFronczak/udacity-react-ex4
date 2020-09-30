import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    numQuestions: 0,
    numCorrect: 0,
    value1: 0,
    value2: 0,
    value3: 0,
    proposedAnswer: 0
  }

  componentDidMount() {
    this.nextRound();
  }

  answer(value) {
    this.setState(ps => ({
    	numQuestions: ps.numQuestions+1
    }));

	if ((this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposedAnswer)
       === value)
	this.setState(ps => ({
    	numCorrect: ps.numCorrect+1
    }));

	this.nextRound();
  }

  nextRound() {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    
    this.setState({
      value1: value1,
      value2: value2,
      value3: value3,
      proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3
  	});
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.answer(true)}>True</button>
          <button onClick={() => this.answer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
