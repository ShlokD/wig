import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './hello.css';

class Hello extends Component {
  render() {
    const { name } = this.props;
    return <div className={styles.helloText}>Hello {name}</div>;
  }
}

Hello.propTypes = {
  name: PropTypes.string
};

Hello.defaultProps = {
  name: ''
};

export default Hello;
