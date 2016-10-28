import { createSelector } from 'reselect';

const producerSelector = state => state.game.producers;

export const moneyPerTickSelector = createSelector(producerSelector,
  producers => producers.reduce((sum, producer) => sum + (producer.count * producer.product), 0));
