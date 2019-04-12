import React from 'react';
import { Provider } from 'react-redux';

import store from './services/store';
// sag: // Provider is given the store as a prop
const Root = ({ children, initialState = {} }) => (
  <Provider store={store(initialState)}>{children}</Provider>
);

export default Root;
