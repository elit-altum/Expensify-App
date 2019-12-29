import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

import ExpenseSummary from '../components/ExpenseSummary';

const ExpenseDashboardPage = (props) => (
  <div>
    <ExpenseSummary name={props.name}/>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
