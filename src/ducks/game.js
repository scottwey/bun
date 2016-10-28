import { TICK, CLICK, BUY_PRODUCER } from './types';
import producers from '../definitions/producers';

// redefine producers here to attach bound buy functions to producers here
const reducer = (state = { money: 0, interval: 1000, producers }, action) => {
  switch (action.type) {
    case BUY_PRODUCER: {
      const newProducers = [...state.producers];
      const producer = state.producers[action.id];
      // interesting thought, bind id, and price to buy function here
      newProducers[action.id] = { ...producer, count: producer.count + 1 };
      const newMoney = state.money - action.price;
      return { ...state, producers: newProducers, money: newMoney };
    }
    case TICK: {
      const newMoney = state.producers.reduce((sum, producer) =>
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
