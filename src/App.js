import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

class Button extends React.Component {
  render() {
    return (
    <button className='Button' onClick={() => this.props.onClick()}>
      {this.props.value}
    </button>
    );
  }
};


class Count extends React.Component {
  render() {
    return <div className='Count'>Count: {this.props.count}</div>
  }
}


class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handleClick() {
    let count = this.state.count.valueOf();
    count = count + 1;
    this.setState({count: count})
  }

  renderButton(text) {
    return (
      <Button 
        value={text}
        onClick={() => this.handleClick()}
      />
    )
  }

  renderCount(count) {
    return (
      <Count count={count}></Count>
    )
  }

  render() {
    return (
      <div className='clickCounter'>
        {this.renderButton('Click me!')}
        {this.renderCount(this.state.count)}
      </div>
    )
  }
}


function App() {
  return (
    <div className='App'>
      <ClickCounter />
    </div>
  );
}

export default App;
