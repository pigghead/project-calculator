import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// digit buttons that deal with numbers
class DigitButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.display}
      </button>
    )
  }
}

function DisplayAnswer(props) {
  return (
    <h2>{props.answer}</h2>
  )
}

class FunctionButton extends React.Component {
  render() {
    return (
      <button onClick={() => {}}>{this.props.display}</button>
    );
  }
}

class CalculatorBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedDigit: 0,
      digit1: 0,
      digit2: 0,
    }
  }

  updateDisplay(i) {
    this.setState({
      displayedDigit: i
    });
  }

  renderDigitButton(i) {
    return (
      <DigitButton 
        display={i}
        onClick={() => this.updateDisplay(i)}
      />
    )
  }

  renderFunctionButton(i) {
    return (
      <FunctionButton 
        display={i}
      />
    )
  }

  render() {
    return (
      <div>
        <div>
          <DisplayAnswer answer={this.state.displayedDigit} />
        </div>
        <div> 
          {this.renderDigitButton(7)}
          {this.renderDigitButton(8)}
          {this.renderDigitButton(9)}
          {this.renderFunctionButton('x')}
        </div>
        <div>
          {this.renderDigitButton(4)}
          {this.renderDigitButton(5)}
          {this.renderDigitButton(6)}
          {this.renderFunctionButton('-')}
        </div>
        <div>
          {this.renderDigitButton(1)}
          {this.renderDigitButton(2)}
          {this.renderDigitButton(3)}
          {this.renderFunctionButton('+')}
        </div>
        <div>
          {this.renderDigitButton(0)}
          {this.renderDigitButton('.')}
          {this.renderFunctionButton('=')}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <CalculatorBody />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
