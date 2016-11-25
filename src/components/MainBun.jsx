import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import bun from '../svg/bun.svg'

const style = StyleSheet.create({
  wrapper: {
    flex: '1',
  },
  bun: {
    margin: '25px',
    ':active': {
      transform: 'scale(0.95)',
    },
  },
});

const wrapper = css(style.wrapper);
const bunClass = css(style.bun);

const MainBun = ({ onClick }) => {
  return (
    <div  onClick={onClick} className={wrapper}>
      <img alt="bun"className={bunClass} src={bun} />
    </div>
  );
};


export default MainBun;
