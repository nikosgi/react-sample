import React, { Component } from 'react';

import Input from '../components/Input/Input';


import './App.css';

class App extends Component {

  state= {

    name    : '',
    email   : '',
    number  : '',
    salary  : '',

    currentStep: 0,
  }

  handleChange = (name) => (e) => {
    console.log(e.target.value, name);
    this.setState({[name] : e.target.value});
  }

  handleStep = (e) =>{
    var nextStep = e.target.name === 'next' ? this.state.currentStep + 1 : this.state.currentStep -1

    this.progRef.style.width = `${nextStep * 25}%` ;

    if (nextStep === 4)
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

    switch(step){
      case 0 :
        return <Input label='Full Name' id='name' value={name} handleChange={this.handleChange}/>
      case 1 :
        return <Input label='Email' id='email' value={email} handleChange={this.handleChange}/>
      case 2 :
        return <Input label='Phone Number' id='number' value={number}  handleChange={this.handleChange}/>
      case 3 :
        return (
        <div>
          <p>Salary</p>
          <Input type='radio' checked={salary==='0 - 1000'} value={'0 - 1000'} label='0 - 1000' id='salary' handleChange={this.handleChange}/>
          <Input type='radio' checked={salary==='1000 - 2000'} value={'1000 - 2000'} label='1000 - 2000' id='salary' handleChange={this.handleChange}/>
          <Input type='radio' checked={salary==='2000 - 3000'} value={'2000 - 3000'} label='2000 - 3000' id='salary' handleChange={this.handleChange}/>
          <Input type='radio' checked={salary==='3000 - 4000'} value={'3000 - 4000'} label='3000 - 4000' id='salary' handleChange={this.handleChange}/>
          <Input type='radio' checked={salary==='Mehr als 4000'} value={'Mehr als 4000'} label='Mehr als 4000' id='salary' handleChange={this.handleChange}/>

        </div>
      )
      case 4 :
        return (
          <div>
            <h3>Preview</h3>
            <p>Name   : {name === '' ? `Not provided` : name}</p>
            <p>Email  : {email=== '' ? `Not provided` : email}</p>
            <p>Number : {number === '' ? `Not provided` : number}</p>
            <p>Salary : {salary === '' ? `Not provided` : salary}</p>
          </div>
        )
      default:
        return <div>Something went wrong :(</div>
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
          <br/>
          {this.renderStep()}
          <br/>
          <div className='buttons'>
            <button disabled={currentStep===0} onClick={this.handleStep} name='back' type='button'>
              Back
            </button>
            <button onClick={ currentStep === 4 ? this.handleRegister : this.handleStep } name='next' type='button'>
              { currentStep === 4 ? 'Register' : 'Next' }
            </button>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
