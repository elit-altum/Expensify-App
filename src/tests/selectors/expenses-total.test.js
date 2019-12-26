import getExpensesTotal from '../../selectors/expenses-total';

const expenses = [
    {
        id: '1',
        description:'First',
        note: '',
        amount: 195,
        createdAt: 1234,
    }, {
        id: '2',
        description:'Second',
        note: '',
        amount: 109500,
        createdAt: 12345,
    }, {
        id: '3',
        description:'Third',
        note: '',
        amount: 4500,
        createdAt: 1234,
    }
];

// For the test
test('Check totalling in array', () => {
    let totalAmount = getExpensesTotal(expenses);
    expect(totalAmount).toBe(114195);
});

test('Check totalling in array with one expense', () => {
    let totalAmount = getExpensesTotal([expenses[2]]);
    expect(totalAmount).toBe(4500);
});

test('Check totalling in array with 0 expense', () => {
    let totalAmount = getExpensesTotal([]);
    expect(totalAmount).toBe(0);
});