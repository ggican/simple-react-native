import * as React from 'react';
import PropTypes from 'prop-types';

// import reducer function
import {servicesState, servicesRedux} from './reducer-services';

// combine initial states
const combineState = {
  ...servicesState,
};

// combine reducer
const combineReducer = {
  service: (state, actions) => servicesRedux(state, actions),
};

// reducer configure
const reducer = (state, actions) => {
  const update = combineReducer[actions.reducer](state, actions);
  return {...state, ...update};
};

const StoreContext = createContext(combineState);

// store data use context
const useStore = () => {
  const {state, dispatch} = React.useContext(StoreContext);
  return {state, dispatch};
};

// store data in provider
const StoreProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, combineState);
  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  );
};

export {StoreProvider, useStore};
