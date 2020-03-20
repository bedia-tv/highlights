import * as React from 'react';
import { createContext, useContext } from 'react';

type Error = {
  message: string;
}

type State = {
  loading: boolean;
  error: Error | null;
}

type Action =
  | { type: 'ERROR', errorMessage: string }
  | { type: 'SUCCESS' }
  | { type: 'LOADING' }
  | { type: 'RESET' }

const initialState: State = {
  loading: false,
  error: null
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ERROR':
      return {
        loading: false,
        error: {
          message: action.errorMessage
        }
      };
    case 'LOADING':
      return {
        ...state,
        loading: true
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false
      };
    case 'RESET':
      return {
        ...initialState
      }
  }
};

export const FormContext = createContext(null);

export const FormContextProvider = ({children}) => {
  return  (
    <FormContext.Provider value={React.useReducer(reducer, initialState)}>
      {children}
    </FormContext.Provider>
  )
};

export const useFormState = () => useContext(FormContext);
