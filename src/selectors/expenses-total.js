
//For getting net sum of all expenses
export default (expenses) => {
    if(expenses.length) {
        let sum = 0;
        expenses.forEach( expense => {
            sum += expense.amount;
        });
        return sum;
    } else {
        return 0;
    }
};