import React, { Component } from 'react';

import TextField from './components/TextField/TextField';
import Radio from './components/Radio/Radio';

import './App.css';

class App extends Component {

  state= {

      name    : '',
      email   : '',
      number  : '',
      salary  : 0,

    currentStep: 0,
  }

  handleChange = (name) => (e) => {
    console.log(e.target.value, name);
    this.setState({[name] : e.target.value});
  }

  handleStep = (e) =>{
    var nextStep = e.target.name == 'next' ? this.state.currentStep + 1 : this.state.currentStep -1
    this.progRef.style.width = `${nextStep * 25}%` ;
    if (nextStep == 4)
      this.progRef.style.backgroundColor = '#1cbd1c';
    else
      this.progRef.style.backgroundColor = '#ff8585';

    this.setState({currentStep: nextStep})

  }

  handleRegister = () => alert('Registered!!!!!');
  renderStep = () => {


    const {
      name,
      email,
      number,
      salary,
      currentStep: step
    } = this.state;

    console.log(salary);
    switch(step){
      case 0 :
        return <TextField label='Name' id='name' value={name} handleChange={this.handleChange}/>
      case 1 :
        return <TextField label='Email' id='email' value={email} handleChange={this.handleChange}/>
      case 2 :
        return <TextField label='Phone Number' id='number' value={number}  handleChange={this.handleChange}/>
      case 3 :
        return (
        <div>
          <p>Salary</p>
          <Radio checked={salary==0} value={0} label='0 - 1000' id='salary' handleChange={this.handleChange}/>
          <Radio checked={salary==1} value={1} label='1000 - 2000' id='salary' handleChange={this.handleChange}/>
          <Radio checked={salary==2} value={2} label='2000 - 3000' id='salary' handleChange={this.handleChange}/>
          <Radio checked={salary==3} value={3} label='3000 - 4000' id='salary' handleChange={this.handleChange}/>
          <Radio checked={salary==4} value={4} label='Mehr als 4000' id='salary' handleChange={this.handleChange}/>

        </div>
      )
      case 4 :
       // return <Review fields={fields}/>
    }
  }


  render() {
    const { currentStep } = this.state;
    return (
      <div className='App'>
        <h3>Register Form</h3>
        <div className='form'>
          <div className='progress'>
            <div ref={e => this.progRef = e} />
          </div>
          {this.renderStep()}
          <br/>
          <div className='buttons'>
            <button disabled={currentStep===0} onClick={this.handleStep} name='back' type='button'>
              Back
            </button>
            <button onClick={ currentStep == 4 ? this.handleRegister : this.handleStep } name='next' type='button'>
              { currentStep == 4 ? 'Register' : 'Next' }
            </button>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
