import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moneyPerTickSelector } from '../selectors/perTickSelector';
import * as gameActions from '../ducks/game';

class Ticker extends Component {
  componentDidMount() {
    this.interval = setInterval(this.props.tick, this.props.interval);
  }

  componentWillUpdate() {
    clearInterval(this.interval);
  }

  componentDidUpdate() {
    this.interval = setInterval(this.props.tick, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { interval, moneyPerTick } = this.props;
    return (<span>{moneyPerTick / (parseFloat(interval) / 1000)} buns per second</span>);
  }
}

Ticker.propTypes = {
  tick: PropTypes.func.isRequired,
  interval: PropTypes.number.isRequired,
  moneyPerTick: PropTypes.number.isRequired,
};

const stateToProps = state => ({ interval: state.game.interval, moneyPerTick: moneyPerTickSelector(state) });
const dispatchToProps = dispatch => bindActionCreators(gameActions, dispatch);

export default connect(stateToProps, dispatchToProps)(Ticker);
