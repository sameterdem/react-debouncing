## Installation

    $ npm install react-debouncing

  Or :

    $ yarn add react-debouncing

## Example

```js
import React, { Component } from 'react';
import debounce from 'react-debouncing';

class Debounce extends Component {
  state = {
    count: 0,
  };

  increment = debounce(() => {
    this.setState({
      count: this.state.count + 1,
    });
  }, 500);

  decrement = debounce(() => {
    this.setState({
      count: this.state.count - 1,
    });
  }, 500);

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.increment}> + </button>
        <button onClick={this.decrement}> - </button>
      </div>
    );
  }
}
```
