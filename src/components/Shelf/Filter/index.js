import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateFilters } from '../../../services/filters/actions';
import Checkbox from '../../Checkbox';

import './style.scss';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

class Filter extends Component {
  static propTypes = { // sag: type checking like typescript
    updateFilters: PropTypes.func.isRequired,
    filters: PropTypes.array
  };

  componentDidMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
    console.log()
    console.log(this.props);
      // sag: {filters: Array(1), updateFilters: ƒ}
          // filters: Array(1)
          // 0: "L"
          // length: 1
          // __proto__: Array(0)
          //
          // updateFilters: ƒ ()
          // arguments: (...)
          // caller: (...)
          // length: 0
          // name: ""
          // prototype: {constructor: ƒ}
          // __proto__: ƒ ()
          // [[FunctionLocation]]: redux.js:462
    this.props.updateFilters(Array.from(this.selectedCheckboxes));
    // this.props is nothing but state data};
  }

  createCheckbox = label => (
    <Checkbox
      classes="filters-available-size"
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createCheckboxes = () => availableSizes.map(this.createCheckbox);

  render() {
    return (
      <div className="filters">
        <h4 className="title">Sizes:</h4>
        {this.createCheckboxes()}        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters.items
});


// there are many state properties under cart...
// cartProducts: state.cart.products,
// newProduct: state.cart.productToAdd,
// productToRemove: state.cart.productToRemove

// export default combineReducers({
//   shelf: shelfReducer,
//   cart: cartReducer,
//   total: totalReducer,
//   filters: filtersReducer,
//   sort: sortReducer
// });

export default connect(
  mapStateToProps, // 
  { updateFilters } //sag: dispatch events via /services/filters/actions file.. 
                        // export const updateFilters = filters => ({ 
                        // type: UPDATE_FILTER,
                        // payload: filters
                        //})
)(Filter); // component name
