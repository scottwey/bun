import React, { PropTypes } from 'react';
import Button from './Button'

const BuyButton = ({ canBuy, onClick, children }) => {
  if (canBuy) {
    return (<Button onClick={onClick}>{children}</Button>);
  }
  return (<Button disabled>{children}</Button>);
};


export default BuyButton;
