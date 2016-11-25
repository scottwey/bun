import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import ProducerInfo from './ProducerInfo';
import ProducerGraphic from './ProducerGraphic';

const style = StyleSheet.create({
  box: {
    margin: '5px 0px',
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
  },
  buy: {
    border: '2px solid #99ffcc',
    ':active': {
      backgroundColor: '#99ffcc',
      color: '#ffffff',
    },
  },
  notEnough: {
    border: '2px solid #cbcbcb',
    pointerEvents: 'none',
    opacity: 0.50,
  },
});

const infoStyle = css(style.info);

const Producer = ({ producer, buyAction, money }) => {
  const { price: basePrice, scaling, count, graphic } = producer;
  const price = Math.ceil(basePrice * Math.pow(scaling, count));
  const boundBuy = buyAction.bind(undefined, price);
  const enoughMoney = money >= price;
  const boxStyle = css(style.box,
    enoughMoney ? style.buy : style.notEnough,
  );
  return (
    <div className={boxStyle} onClick={boundBuy}>
      <ProducerGraphic count={count} asset={graphic} />
      <ProducerInfo price={price} producer={producer} />
    </div>
  );
};

Producer.propTypes = {
  producer: PropTypes.object.isRequired,
  buyAction: PropTypes.func.isRequired,
  money: PropTypes.number.isRequired,
};

export default Producer;
