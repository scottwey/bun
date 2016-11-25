import { createSelector } from 'reselect';
import { combineProducersAndCount } from '../selectors/producerCountSelector';

const countsSelector = state => state.game.producers;

export const moneyPerTickSelector = createSelector(countsSelector,
  counts => combineProducersAndCount(counts).reduce((sum, producer) => sum + (producer.count * producer.product), 0));
