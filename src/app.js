import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { firebase } from './firebase/firebase';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import Loader from './components/Loader';

const store = configureStore();


//Pre-Loader Screen
ReactDOM.render(<Loader />, document.getElementById('app'));

//Used for rendering the app via login and logout only once for optimisation
let hasRendered = false;
const renderApp = ( name = '') => {
  if(!hasRendered) {
    const jsx = (
      <Provider store={store}>
        {/* For showing user name on summary. Chains to ExpenseSummary component */}
        <AppRouter name={name} />
      </Provider>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}

//To run a function everytime a user logs in/ logs out
firebase.auth().onAuthStateChanged( (user) => {
  if(user) {  //User data stored in user

    store.dispatch(login(user.uid));
    //If the expenses are fetched and dispatched to store, load the actual app.
    store.dispatch(startSetExpenses())
    .then( () => {
      renderApp(user.displayName);
      if(history.location.pathname === '/') {
        //If the user is at root page and logs in then take him to dashboard if not let him stay at same page
        history.push('/dashboard');
      }
    })

  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});


