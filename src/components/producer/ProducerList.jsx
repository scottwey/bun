import React, { PropTypes } from 'react';
import Producer from './Producer'
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
  scrollingColumn: {
    overflowY: 'scroll',
    height: '100%',
    width: '100%',
  }
});

const scrollingColumn = css(style.scrollingColumn);

const ProducerList = ({ game: { producers: producerArray, money }, buyAction }) => {
  const producers = producerArray.map((producer, id) => (
    <Producer key={id} producer={producer} buyAction={buyAction.bind(undefined, id)} money={money} />
  ));
  return (
    <div className={scrollingColumn}>
      {producers}
    </div>
  );
};

export default ProducerList;
