import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import qList from './questions.js';
import axois from 'axios';
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

  post = ()  => {
    console.log('tests', this.state.questionList[this.state.current].tests);
    console.log('qlist', this.state.questionList);
    console.log('current', this.state.current);
    console.log('currQlist', this.state.questionList[this.state.current]);
    axois.post('/api/tests', {
      code: this.state.code,
      house_id: this.state.house,
      tests: this.state.questionList[this.state.current].tests
    }).then(response => console.log(response));
  }

  render() {
    const options = { 
      lineNumbers: true,
      mode: 'javascript' 
    };

    return (
      <div className='container'>
        <select onChange={this.updateHouse}>
          <option value="">Select a House</option>
          <option value="2">RavenClosure</option>
          <option value="1">GryffinDOM</option>
          <option value="3">SlytherIndentYourCode</option>
          <option value="4">GitHubblePuff</option>
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
