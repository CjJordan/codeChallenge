import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import qList from './questions.js';
import studentList from './student.js';
import axios from 'axios';
require('codemirror/mode/javascript/javascript');

class App extends Component {
  state = {
    questionList: [],
    current: 0,
    code: "",
    house: "",
    suite: "loops",
    status: '',
    name: ''
  }

  updateList = () => {
    this.setState({ questionList: qList.filter(e => e.suite === this.state.suite) }, this.updateCode)
  }

  updateSuite = (e) => { this.setState({ suite: e.target.value }, this.updateList); }

  updateHouse = (e) => { this.setState({ house: e.target.value }) }

  updateName = e => { this.setState({name: e.target.value}) }


  incrementQuestion = () => {
    const newIndex = (this.state.current + 1) % this.state.questionList.length;
    this.setState({ current: newIndex, status: '' }, this.updateCode)
  }

  updateCode = (newCode) => {
    this.setState({ code: newCode ? newCode : this.state.questionList[this.state.current].code })
  }

  post = () => {
    if (!this.state.questionList[this.state.current].done) {
      axios.post('/api/tests', {
        code: this.state.code,
        name: this.state.house,
        tests: this.state.questionList[this.state.current].tests
      }).then(response => {
        if (response.data.success) {
          this.setState({ status: 'success' });
          this.state.questionList[this.state.current].done = true;
        }
        else {
          this.setState({ status: 'fail' })
        }
      });
    }
  }



  render() {
    const options = {
      lineNumbers: true,
      mode: 'javascript'
    };

    return (
      <div>
        <div className="page">
          <div className="select-dropdown">
            <select onChange={this.updateHouse}>
            <option>Select your name</option>
              {studentList.map(e => <option value={e}>{e}</option>)}
            </select>
          </div>


          <div className="select-dropdown">
            <select className="select" onChange={this.updateSuite}>
              <option>Select a Collection</option>
              <option value="practice1">Checkpoint</option>
              <option value="loops">loops</option>
              <option value="conditionals">conditionals</option>
              <option value="functions">functions</option>
            </select>
          </div>
        </div>
        <div className='border instructions'>
          <h2>Instructions</h2>
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
        <div id="response" className={this.state.status}></div>
        <button onClick={this.post}>Submit</button>
        <button onClick={this.incrementQuestion}>Next</button>
      </div>
    )
  }
}

export default App;
