import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
  graphicWrapper: {
    width: '30%',
  },
  hidden: {
    height: '14em',
    backgroundColor: '#bbbbbb',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const graphicWrapperStyle = css(style.graphicWrapper);
const hiddenStyle = css(style.hidden, style.graphicWrapper);

const ProducerGraphic = ({ asset, count }) => {
  const ownOne = count > 0;
  let graphic;
  if (ownOne) {
    graphic = (
      <div className={graphicWrapperStyle}>
        <img src={asset} alt="another bun" />
      </div>
    );
  } else {
    graphic = (
      <div className={hiddenStyle}>
        <span style={{ color: 'white', fontSize: '3em', fontWeight: 'bold' }}>
          ?
        </span>
      </div>
    );
  }
  return graphic;
};

export default ProducerGraphic;
