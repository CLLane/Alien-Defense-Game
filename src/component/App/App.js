import React, { Component } from 'react';
import Canvas from '../Canvas/Canvas';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
     <Canvas />
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;