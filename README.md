<h1>Expensify-App</h1>
<p>
    <img src="https://img.shields.io/badge/framework-React-blue?style=flat&logo=react" />
    <img src="https://img.shields.io/badge/package--manager-yarn-blueviolet?style=flat&logo=yarn" />
    <img src="https://img.shields.io/badge/backend-nodeJS-bluegreen?style=flat" />
    <img src="https://img.shields.io/badge/module--bundler-Webpack-lightblue?style=flat&logo=webpack" />
</p>
<p><img src="https://img.shields.io/badge/made--by-elit--altum-green?style=flat" /></p>

One stop app for all your expenses!<br>
An expense manager with filters, grouping and sorting for all your expenses.
<br> 
Login with your Google account to get started.

### Live demo : https://elit-altum-expensify.herokuapp.com

### Technology Stack
- ReactJS
- Sass
- Redux
- Redux-Thunk
- React-Router
- NodeJS
- Firebase
- Webpack
- Babel

## How To Use

### Authentication and general use
- Click on 'Login with Google' to authenticate by a Google Account
- From the pop-up select the google account you want to use
- Your dashboard screen should open with your name on the top-right
- App Navigation :
&emsp<ol>
        <li>
            __Dashboard__: Clicking the 'Expensify' text on the header from any page will redirect you to your dashboard.
        </li>
        <li>
            __Logout__: The logout button on the top right of the header will log you out from the current session. All your expenses will be saved for further use.
        </li>
    </ol> 

### Creating an expense
- Authenticate with Google to enter your dashboard.
- Click on 'Add Expense' button below your expense summary.
- Add all the details of your expense
&emsp<ol>
        <li>
            __Description__: Add title/description of your expense (compulsory)
        </li>
         <li>
            __Amount__: Add the amount you spent format : *[..xx.yy]* (compulsory)
        </li>
         <li>
            __Date__: Add the date of the expenditure *(defaults to current date)* 
        </li>
        <li>
            __Note__: Add some additional information about your expense.
        </li>
    </ol>
- Click on 'Add Expense' to save the expense
- View it on your dashboard

### Filtering/Sorting expenses
- Visit your dashboard page and the expense summary will show you the total number of expenses on screen and the amount they equal
- Use the filters to filter your expenses
&emsp<ol>
        <li>
            __Search By Title__: Search for your expense by it's title and recieve per keystroke feedback of the value typed.
        </li>
        <li>
            __Search By Date__: Search for a group of expenses you saved between two particular dates i.e the start date and the end date.
        </li>       
    </ol>
- Sort your expenses using the sort dropdown/select box
&emsp<ol>
        <li>
            __Amount__: Displays all the expenses on screen in the order of costliest expense first and the cheapest last
        </li>
        <li>
            __Date__: Displays all the expenses on screen in the order such that the expense with the latest date of expenditure comes first.
        </li>       
    </ol>
- The 'Unfiltered Expenses' component will continue to show how many expenses have been hidden due to the filters applied. 

### Editing an expense
- Clicking on any displayed expense will allow you to edit it.
- Follow the same rules as that of adding expense
- Click on 'Add Expense' button to save and update the expense

### Removing an expense
- Clicking on any displayed will allow you to remove it
- The 'Remove' button beneath the 'Add Expense' will delete your expense
- Clicking on that button will ask for your confirmation for removal
- Click on 'Remove' to confirm your removal
- You will be redirected to the dashboard upon removal.


## Project Setup And Use

```
// installs dependencies and runs live-server

yarn install
yarn run dev-server
```




