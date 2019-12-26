import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//A library to allow dispatch of functions to the store instead of objects only
import thunk from 'redux-thunk';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

//The second argument to createStore are store enhancers i.e some middleware eg Thunk or the Redux
//dev tools. Compose is a fn. which chains multiple enhancers and sends them as a singular argument 
//by nesting the enhancers. 

//The following line uses the Redux DevTools compose fn i.e ReduxDevTools + other store enhancer if
//redux dev tools are installed otherwise the normal compose fn for chaining enhancers.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    //Whichever compose function is returned from above is run
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
