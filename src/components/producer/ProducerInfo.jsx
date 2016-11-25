import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
  info: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 15px 35px 5px',
    boxSizing: 'border-box',
    width: '70%',
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const infoStyle = css(style.info);
const spaceBetween = css(style.spaceBetween);

const ProducerInfo = ({ producer, price }) => {
  const { name, description, product, count } = producer;
  const ownOne = count > 0;
  let info;
  if (ownOne) {
    info = (
      <div className={infoStyle}>
        <div className={spaceBetween}>
          <h3>{name}</h3>
          <span style={{ fontSize: '1.7em', fontWeight: 'bold' }}>{count}</span>
        </div>
        {description} <br />
        Produces { product } buns at a time.<br />
        Price: {price}
      </div>
    );
  } else {
    info = (
      <div className={infoStyle}>
        <h3>???</h3>
        Price: {price}
      </div>
    );
  }
  return info;
};

export default ProducerInfo;
