import React, { PropTypes } from 'react';
import BuyButton from './BuyButton';

const Producer = ({ producer, buyAction, money }) => {
  const { name, description, product, price: basePrice, scaling, count } = producer;
  const price = Math.ceil(basePrice * Math.pow(scaling, count));
  const boundBuy = buyAction.bind(undefined, price);
  const enoughMoney = money >= price;
  return (
    <div>
      <h3>{name}</h3>
      {description} <br />
      Produces { product } buns at a time. You have {count}. <br />
      Price: {price} <br />
      <BuyButton canBuy={enoughMoney} onClick={boundBuy}>Buy</BuyButton>
      <hr />
    </div>
  );
};

Producer.propTypes = {
  producer: PropTypes.object.isRequired,
  buyAction: PropTypes.func.isRequired,
  money: PropTypes.number.isRequired,
};

export default Producer;
