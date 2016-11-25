import { createSelector } from 'reselect';
import producers from '../definitions/producers';

const countSelector = state => state.game.producers;

export const combineProducersAndCount = counts => producers.map((producer, index) => ({ ...producer, count: counts[index] }));

const producerCountSelector = createSelector(countSelector,
  producerCounts => combineProducersAndCount(producerCounts));

export default producerCountSelector;
