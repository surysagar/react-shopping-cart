import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increaseReduxCounter, decreaseReduxCounter } from '../../services/counter/actions';

class Counter extends Component {
  // static propTypes = {
  //   label: PropTypes.string.isRequired,
  //   handleCheckboxChange: PropTypes.func.isRequired
  // };
  user = {
    id: 339,
    name: 'Fred',
    age: 42
  };

  

  state = {
    counter: 0
  };

  increaseCounter = () => {
    this.setState({counter:this.state.counter+1})
  }

  decreaseCounter = () => {
    this.setState({counter:this.state.counter-1})
  }
// sag: using onClick={() => this.decreaseCounter()} 
// ()=> is imp in bracket
  render() {
    const { counter, decreaseReduxCounter, increaseReduxCounter } = this.props;
    console.log(this.props);
    return (
      <div>
        <div style={{border:'1px solid gray', marginTop:'40px'}}>
        <h4>Counter React basic Example</h4>
        <div style={{flexDirection: 'row', width:'300', justifyContent: 'space-around'}}>
          <div onClick={() => this.increaseCounter()} style={{float: 'left'}}>Increase</div>
          <div style={{float: 'left'}}>{this.state.counter}</div>
          <div onClick={() => this.decreaseCounter()} style={{float: 'left'}}>Decrease</div>
        </div>
      </div>        
        <div style={{border:'1px solid gray', marginTop:'40px'}}>
        <h4>Counter Redux Example</h4>
        <div style={{flexDirection: 'row', width:'300', justifyContent: 'space-around'}}>
          <div onClick={increaseReduxCounter} style={{float: 'left'}}>Increase</div>
          <div style={{float: 'left'}}>{counter.reduxCounter}</div>
          <div onClick={decreaseReduxCounter} style={{float: 'left'}}>Decrease</div>
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.reduxCounter
});

// sag: below is one of the way of dispact events but without using 'connect'
// const mapDispatchToProps = dispatch => {
//   return {
//     increaseReduxCounter : () => dispatch({type: 'INCREASE_COUNTER'}),
//     decreaseReduxCounter : () => dispatch({type: 'DECREASE_COUNTER'})
//   }
// }

export default connect(
  mapStateToProps,
  {increaseReduxCounter, decreaseReduxCounter} // sag: these are the events fired from DOM
)(Counter);

// sag: React-Redux's connect method generates components that shallowly 
// check reference changes to the root state, and the return values from 
// the mapStateToProps function to see if the wrapped components actually
// need to re-render. Such shallow checking requires immutability to function
// correctly.

// combineReducers will check the state of the hasChanged flag. 
//If it’s true, the newly-constructed state object will be returned. 
//If it’s false, the current state object is returned.
