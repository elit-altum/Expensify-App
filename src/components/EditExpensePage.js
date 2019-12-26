import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense)
      .then( () => {
        this.props.history.push('/');
      });    
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id })
      .then( () => {
        this.props.history.push('/');
      });
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <p className="page-header__summary">Edit Expense</p>
          </div>
        </div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <div className="content-container">
          <button onClick={this.onRemove} className="remove-button">Remove</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
