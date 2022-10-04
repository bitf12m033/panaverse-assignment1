const users = ['admin' , 'Super Admin' , 'Lab' ,'Professor'];

users.forEach( (user) => {
    if(user === 'admin')
        console.log(`Hello ${user}, would you like to see a status report?`);
    else 
        console.log(`Hello ${user}, thank you for logging in again`);

})