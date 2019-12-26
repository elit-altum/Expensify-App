//Locally made firebase file with functions
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});

//For adding an expense to the firebase
export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    //Gets customer uid to refer his database
    const uid = getState().auth.uid;
    //Cooler way to set defaults by destructuring the object and then setting defaults rather in fn arguments
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    
    const pushExpense = {description, note, amount, createdAt};

    //Send the expense to firebase and stores it in user's database
    //Return value is a promise also sent to anyone calling the dispatch() fn
    return database.ref(`users/${uid}/expenses`).push(pushExpense)
      .then( (ref) => {
        //Sends the data to redux store if dispatched successfully
        //ref stores the object just pushed
        dispatch(addExpense({
          id: ref.key,
          ...pushExpense,
        }));
      })
  }
}

// REMOVE_EXPENSE
export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//Async action through thunk for removing expense
export const startRemoveExpense = ({ id }) => {
  //Fn. to run via thunk
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    //Remove data from firebase and return a promise
    return database.ref(`users/${uid}/expenses/${id}`).remove()
      .then( () => {
        //Update the store by removing the expense from it as well
        dispatch(removeExpense(id));
      });
  } 
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//For async actions to update on firebase via thunk
export const startEditExpense = (id, updates) => {
  //The fn to be run via thunk
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    //changing data on firebase
    return database.ref(`users/${uid}/expenses/${id}`).update({
      ...updates,
    }).then( () => {
      //Update the store
      dispatch(editExpense(id, updates));
    });
  }
};

//For setting expenses recieved from firebase
//SET_EXPENSES 
export const setExpenses = (expenses) => {
  return {
    type: 'SET_EXPENSES',
    expenses,
  }
};

//Dispatching an action fn. using thunk
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const expenses = [];
    //gets the array from firebase(personal user db) and returns a promise 
    // to check if expenses were fetched and dispatched
    return database.ref(`users/${uid}/expenses`).once('value')
      .then( (snapshot) => {
        snapshot.forEach( (childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          })
        })

        //If runs send data to state
        dispatch(setExpenses(expenses));
      })
  }
}
