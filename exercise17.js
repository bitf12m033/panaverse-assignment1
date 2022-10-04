let guestList = ['Omer' ,'Adil', 'Umer'];

guestList.forEach((g) => {
    console.log(`Hey ${g} , this is invitation to dinner at my place at time`);
})

console.log(`Sorry , ${guestList[0]} , Couldn't make it`);

guestList.shift();

guestList.unshift('Haider');
guestList.forEach((g) => {
    console.log(`Hey ${g} , this is invitation to dinner at my place at time`);
})

console.log("\nWe got a bigger table!");
guestList.push('Umair','Khurram' ,'Muneed')

guestList.forEach((g) => {
    console.log(`Hey ${g} , this is invitation to dinner at my place at time`);
})

console.log("\nSorry, we can only invite two people to dinner.");

 
console.log(`Sorry, ${guestList.pop()} ,  there's no room at the table.`);

console.log(`Sorry, ${guestList.pop()} ,  there's no room at the table.`);
console.log(`Sorry, ${guestList.pop()} ,  there's no room at the table.`);
console.log(`Sorry, ${guestList.pop()} ,  there's no room at the table.`);
console.log(`Hey, ${guestList.pop()} ,  this is invitation to dinner at my place at time`);
console.log(`Hey, ${guestList.pop()} ,  this is invitation to dinner at my place at time`);

guestList.forEach((g) => {
    console.log(`Hey ${g} , this is invitation to dinner at my place at time`);
})