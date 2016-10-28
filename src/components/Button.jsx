import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
  default: {
    padding: '2px 10px',
    backgroundColor: 'white',
    ':hover:enabled': { backgroundColor: '#5588ff',
                color: 'white' },
    ':active:enabled': { backgroundColor: '#3366dd' },
    ':disabled': { color: '#dbdbdb',
                    borderColor: '#dbdbdb',
                    backgroundColor: '#fdfdfd' },
    border: '1px solid #5588ff',
    borderRadius: '3px',
    color: '#5588ff',
    outline: 'none',
    margin: '3px',
    fontSize: '1em',
    textTransform: 'uppercase',
    }
});

const Button = props => <button className={css(style.default)} {...props}>{props.children}</button>;
export default Button;
