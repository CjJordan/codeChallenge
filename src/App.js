import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import qList from './questions.js';
require('codemirror/mode/javascript/javascript');

class App extends Component {
  state = {
    questionList: [],
    current: 0,
    code: "",
    house: "",
    suite: "loops"
  }

  updateList = () => {
    this.setState({ questionList: qList.filter(e => e.suite === this.state.suite)}, this.updateCode)
  }

  updateSuite = (e) => {this.setState({suite: e.target.value}, this.updateList);}

  updateHouse = (e) => {this.setState({house: e.target.value})}

  incrementQuestion = () => {
    const newIndex = (this.state.current + 1) % this.state.questionList.length;
    this.setState({current: newIndex}, this.updateCode)
  }

  updateCode = (newCode) => {
     this.setState({ code: newCode? newCode : this.state.questionList[this.state.current].code})
  }

  post = ()  => {}

  render() {
    const options = { 
      lineNumbers: true,
      mode: 'javascript' 
    };

    return (
      <div className='container'>
        <select onChange={this.updateHouse}>
          <option value="">Select a House</option>
          <option value="raven">RavenClosure</option>
          <option value="gryffin">GryffinDOM</option>
          <option value="slyther">SlytherIndentYourCode</option>
          <option value="github">GitHubblePuff</option>
        </select>

        <select onChange={this.updateSuite}>
          <option value="loops">Select a Collection</option>
          <option value="loops">loops</option>
          <option value="conditionals">conditionals</option>
          <option value="functions">functions</option>
        </select>
        <div className='border'>
          {this.state.questionList.length && this.state.questionList[this.state.current].instructions}
        </div>

        <div className='border'>
          <CodeMirror 
            value={this.state.code} 
            onChange={this.updateCode} 
            options={options}
            defaultValue={this.state.code}
           />
        </div>
        <button onClick={this.post}>Submit</button>
        <button onClick={this.incrementQuestion}>Next</button>
      </div>
    )
  }
}

export default App;
