import { TICK, CLICK, BUY_PRODUCER } from './types';
import producerDefinitions from '../definitions/producers';
import { combineProducersAndCount } from '../selectors/producerCountSelector';

// redefine producers here to attach bound buy functions to producers here
const reducer = (state = {
  money: 0,
  interval: 1000,
  producers: producerDefinitions.slice().fill(0),
}, action) => {
  switch (action.type) {
    case BUY_PRODUCER: {
      const newProducers = [...state.producers];
      newProducers[action.id] += 1;
      const newMoney = state.money - action.price;
      return { ...state, producers: newProducers, money: newMoney };
    }
    case TICK: {
      const newMoney = combineProducersAndCount(state.producers).reduce((sum, producer) =>
        sum + (producer.count * producer.product)
      , state.money);
      return { ...state, money: newMoney };
    }
    case CLICK: {
      return { ...state, money: state.money + 1 };
    }
    default: return state;
  }
};

export const click = () => ({ type: CLICK });
export const tick = () => ({ type: TICK });
export const buyProducer = (id, price) => ({ type: BUY_PRODUCER, id, price });

export default reducer;
