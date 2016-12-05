import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import * as gameActions from '../ducks/game';
import ProducerList from '../components/producer/ProducerList';
import Ticker from '../components/Ticker';
import MainBun from '../components/MainBun';
import producerCountSelector from '../selectors/producerCountSelector';

const style = StyleSheet.create({
  parent: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    userSelect: 'none',
    cursor: 'default',
  },
  column: {
    flex: '1 1 auto',
    maxWidth: '50vw',
    flexDirection: 'column',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

const parent = css(style.parent);
const column = css(style.column);
const centerColumn = css(style.column, style.flexCenter);

const Index = ({ game, click, buyProducer }) => (
  <div className={parent}>
    <div className={centerColumn}>
      <MainBun onClick={click} />
      <div style={{ margin: '0% 5%' }}>
        <h2>{game.money} buns</h2>
        <Ticker />
      </div>
    </div>
    <div className={column}>
      <ProducerList game={game} buyAction={buyProducer} />
    </div>
  </div>
);

Index.propTypes = {
  game: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired,
  buyProducer: PropTypes.func.isRequired,
};

const stateToProps = state => ({
  game: { ...state.game, producers: producerCountSelector(state) },
});
const dispatchToProps = dispatch => bindActionCreators(gameActions, dispatch);

export default connect(stateToProps, dispatchToProps)(Index);
