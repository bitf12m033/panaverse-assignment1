const current_users = ['Admin' , 'Super Admin' , 'Lab' ,'Professor'];
const new_users = ['admin' ,'Professor' , 'Umer' , 'Adil'];

new_users.forEach( (user) => {

    if(current_users.some( u => user.toLowerCase() === u.toLowerCase()))
        console.log(`need to enter a new username`);
    else 
        console.log(`username is available`);

})