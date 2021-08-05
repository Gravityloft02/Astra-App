import React, {createContext, useEffect, useReducer} from 'react';
import authInitialState from './initialStates/authInitialState';
import auth from './reducers/auth';
import astra from './reducers/astra';
import feeInitialState from './initialStates/astraInitialState';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [astraState, paymentDispatch] = useReducer(astra, feeInitialState);


  return (
    <GlobalContext.Provider
      value={{
        authState,
        astraState,
        authDispatch,
        paymentDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
