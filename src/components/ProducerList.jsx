import React, { PropTypes } from 'react';
import Producer from './Producer'

const ProducerList = ({ game: { producers: producerArray, money }, buyAction }) => {
  const producers = producerArray.map((producer, id) => (
    <Producer key={id} producer={producer} buyAction={buyAction.bind(undefined, id)} money={money} />
  ));
  return (
    <div>
      {producers}
    </div>
  );
};

export default ProducerList;
