import React from 'react';

import selectExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';

import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ExpenseSummary = (props) => {
    let arrayTotal = getTotalExpenses(props.filteredExpenses);
    let length = props.filteredExpenses.length;

    let word =  length === 1 ? 'expense' : 'expenses';
    return (
        <div className="page-header">
            <div className="content-container">
                <p className="page-header__summary">
                    Showing <span>{length}</span> {word} totalling <span>₹{numeral(arrayTotal / 100).format('0,0.00')}</span>
                </p>
                <div className="page-header__action">
                    <Link to="/create" className="login-button">
                        Add Expense
                    </Link>
                </div>
            </div>           
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        filteredExpenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);

