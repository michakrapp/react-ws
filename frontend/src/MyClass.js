import React from 'react';

export default class MyClass extends React.Component {
  state = {
    name: 'Klaus',
  };

  // constructor() {
  //   super();
  //   this.handleClick = () => {
  //     console.log(this.state.name);
  //   };
  // }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: 'Peter' });
    }, 1000);
  }

  // handleClick() {
  //   console.log(this.state.name);
  // }

  handleClick = () => {
    console.log(this.state.name);
  };

  render() {
    console.log('RENDER');

    return (
      <div>
        My Class {this.state.name}
        <button onClick={this.handleClick}>click me if you can</button>
      </div>
    );
  }
}
