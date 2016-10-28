import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as gameActions from '../ducks/game';
import ProducerList from '../components/ProducerList';
import Ticker from '../components/Ticker';
import Button from '../components/Button';

const Index = ({ game, click, buyProducer }) => (
  <div>
    <h1>BUN QUEST</h1>
    <h2>{game.money} buns</h2>
    <Ticker /><br />
    <Button onClick={click}> Bake Bun </Button><hr />
    <ProducerList game={game} buyAction={buyProducer} /><br />
  </div>
);

Index.propTypes = {
  game: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired,
};

const stateToProps = state => ({ game: state.game });
const dispatchToProps = dispatch => bindActionCreators(gameActions, dispatch);

export default connect(stateToProps, dispatchToProps)(Index);
