import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ConfirmModal from '../components/ConfirmModal';

export class EditExpensePage extends React.Component {
  state = {
    openModal: false,
    buttonText: 'Remove'
  }

  //For static title because if provided to modal dynamically i.e straight from expenses
  //Would cause app to crash as the expense will be removed but we'll try to render
  //it's title on the screen thereby crashing the app
  title = this.props.expense.description;

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense)
      .then( () => {
        this.props.history.push('/');
      });    
  };

  onOpenModal = () => {
    this.setState( (state) => ({openModal: !state.openModal}));
  };

  onRemove = () => {
    this.setState( () => ({buttonText: 'Removing...'}) );
    this.props.startRemoveExpense({ id: this.props.expense.id })
      .then( () => {
        this.props.history.push('/'); 
      })  
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <p className="page-header__summary_other">Edit Expense</p>
          </div>
        </div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <div className="content-container">
          <button onClick={this.onOpenModal} className="remove-button">Remove</button>
        </div>
        <ConfirmModal 
          isOpen={this.state.openModal} 
          requestClose={this.onOpenModal} 
          remove={this.onRemove} 
          title={this.title}
          buttonText={this.state.buttonText}
        />
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
