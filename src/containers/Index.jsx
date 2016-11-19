import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import * as gameActions from '../ducks/game';
import ProducerList from '../components/ProducerList';
import Ticker from '../components/Ticker';
import MainBun from '../components/MainBun';

const style = StyleSheet.create({
  parent: {
    display: 'flex',
    justifyContent: 'center',
    userSelect: 'none',
  },
  column: {
    flex: 1,
    maxWidth: '30vw',
    flexDirection: 'column',
  },
  left: {
    justifyContent: 'flex-end',
  },
  right: {
    justifyContent: 'flex-start',
  },
});

const parent = css(style.parent);
const leftColumn = css(style.column, style.left);
const rightColumn = css(style.column, style.right);

const Index = ({ game, click, buyProducer }) => (
  <div className={parent}>
    <div className={leftColumn}>
      <h1>BUN QUEST</h1>
      <h2>{game.money} buns</h2>
      <Ticker /><br />
      <MainBun onClick={click} />
    </div>
    <div className={rightColumn}>
      <ProducerList game={game} buyAction={buyProducer} />
    </div>
  </div>
);

Index.propTypes = {
  game: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired,
  buyProducer: PropTypes.func.isRequired,
};

const stateToProps = state => ({ game: state.game });
const dispatchToProps = dispatch => bindActionCreators(gameActions, dispatch);

export default connect(stateToProps, dispatchToProps)(Index);
