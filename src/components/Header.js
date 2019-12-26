import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ dispatchStartLogout }) => (
  <header className="header">
    <Link to="/dashboard"className="header__title">
      <h1>Expensify</h1>
    </Link>
    <button 
      onClick={dispatchStartLogout}
      className="login-button"
    >
        Logout
    </button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  dispatchStartLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
