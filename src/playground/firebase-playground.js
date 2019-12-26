//Subsciribing to firebase and getting objects as array
// const onValueChange = database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach( (childSnapshot) => {
//             expenses.push( {
//                 id: childSnapshot.key, //Returns unique key as a string
//                 ...childSnapshot.val(),
//             })
//         })
//         console.log(expenses);
//     }, (e) => {
//         console.log('Error:' , e);
//     });


//Checking for event-types
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log( snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log( snapshot.key, snapshot.val());
// });
//For the expenses db
// database.ref('expenses').push({
//     description: 'Water bill',
//     note: '',
//     amount: 4500,
//     createdAt: 2000,
// });

// database.ref('expenses').push({
//     description: 'Gas Bill',
//     note: 'the second one',
//     amount: 3700,
//     createdAt: -100,
// });

// database.ref('expenses').push({
//     description: 'Electricity',
//     note: '',
//     amount: 4800,
//     createdAt: -2000,
// });

// database.ref('expenses/-LwhnLPhWC7W76Ys0Zdn').update({
//     amount: 2300,
// });

//Send first query to database
// database.ref().set({
//     name: 'Manan Sharma',
//     age: 19,
//     stressLevel: 6,
//     job: {
//         title: 'Software Engineer',
//         company: 'Google'
//     },
//     location: {
//         city: 'New Delhi',
//         country: 'India'
//     }, 
// }).then(() => {
//     console.log('Served correctly!');
// }).catch((error) => {
//     console.log('Error: ', error);
// });

// //For fetching data once
// database.ref().once('value').then( (snapshot) => {
//     console.log(snapshot.val());
// }).catch( (e) => {
//     console.log(e);
// });

// const getGreeting = ({name, job}) => {
//     console.log(`${name} is a ${job.title} at ${job.company}`);
// };

// //For fetching data everytime it changes
// const onValueChange = database.ref('location/city').on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log(e);
// });

// database.ref().update({
//     name: 'Chaman',
//     'job/company': 'Amazon',
//     'location/city': 'New York',
// });

// setTimeout( () => {
//     database.ref().update({
//         name: 'Chaman',
//         'job/company': 'Amazon',
//     });
// }, 1000);

// setTimeout(() => {
//     database.ref().off(); 
// }, 5000);

// setTimeout( () => {
//     database.ref().update({
//         name: 'Andrew',
//         'job/company': 'Micro',
//         'location/city': 'delhi'
//     });
// }, 1000);
//For removing age
// databse.ref('/age').remove().then( () => {
//     console.log('age removed successfully');
// }).catch( (e) => {
//     console.log('couldnt remove ', e);
// })

//For updating the values
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Hyderabad',
// }).then( () => {
//     console.log('Updated successfully');
// }).catch( (e) => {
//     console.log('Error: ', e)
// })