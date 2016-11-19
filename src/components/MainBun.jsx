import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import bun from '../svg/bun.svg'

const style = StyleSheet.create({
  bun: {
    userSelect: 'none',
    height: 'auto',
    width: '100%',
    ':active': {
      transform: 'scale(0.9)',
    },
  },
});

const className = css(style.bun);

const MainBun = ({ onClick }) => {
  return (<img alt="bun" onClick={onClick} className={className} src={bun} />);
};


export default MainBun;
