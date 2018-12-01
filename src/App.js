import React, { Component } from 'react';

import Input from './components/Input/Input';


class App extends Component {

  state= {
    fields:{
      name    : '',
      email   : '',
      number  : '',
      salary  : '',
    },
    currentStep: 0,
  }

  handleChange = (name) => (e) => {
    this.setState({fields : { [name] : e.target.value } } );
  }

  renderStep = () => {

    const { currentStep: step, fields } = this.state;

    const {
      name,
      email,
      number,
      salary
    } = fields;

    switch(step){
      case 0 :
        return <Input label='Name' id='name' value={name} type='text' handleChange={this.handleChange}/>
      case 1 :
        return <Input label='Email' id='email' value={email} type='text' handleChange={this.handleChange}/>
      case 2 :
        return <Input label='Number' id='number' value={number} type='text' handleChange={this.handleChange}/>
      case 3 :
        return <Input label='Salary' id='salary' value={salary} type='text' handleChange={this.handleChange}/>
      case 4 :
        // return <Review fields={fields}/>
    }
  }

  render() {
    return (
      <div>
        {this.renderStep()}
      </div>
    );
  }
}

export default App;
