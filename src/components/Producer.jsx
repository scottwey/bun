import React, { PropTypes } from 'react';
import BuyButton from './BuyButton';
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
  box: {
    userSelect: 'none',
    margin: '5px',
    width: '400px',
    padding: '3px',
  },
  buy: {
    border: '2px solid #39ffaa',
    ':active': {
      backgroundColor: '#99ffcc',
    },
  },
  notEnough: {
    border: '2px solid #bbbbbb',
    pointerEvents: 'none',
    opacity: 0.50,
  },
});

const Producer = ({ producer, buyAction, money }) => {
  const { name, description, product, price: basePrice, scaling, count } = producer;
  const price = Math.ceil(basePrice * Math.pow(scaling, count));
  const boundBuy = buyAction.bind(undefined, price);
  const enoughMoney = money >= price;
  const ownOne = count > 0;
  const className = css(style.box,
    enoughMoney ? style.buy : style.notEnough,
  );
  let producerCard;
  if (ownOne) {
    producerCard = (
      <div className={className} onClick={boundBuy}>
        <h3>{name}</h3>
        {description} <br />
        Produces { product } buns at a time. You have {count}. <br />
        Price: {price} <br /><br />
      </div>
    );
  } else {
    producerCard = (
      <div className={className} onClick={boundBuy}>
        <h3>???</h3>
        Price: {price} <br /><br />
      </div>
    );
  }
  return producerCard;
};

Producer.propTypes = {
  producer: PropTypes.object.isRequired,
  buyAction: PropTypes.func.isRequired,
  money: PropTypes.number.isRequired,
};

export default Producer;
