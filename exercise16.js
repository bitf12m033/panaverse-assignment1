let guestList = ['Omer' ,'Adil', 'Umer'];

guestList.forEach((g) => {
    console.log(`Hey ${g} , this is invitation to dinner at my place at time`);
})

console.log(`Sorry , ${guestList[0]} , Couldn't make it`);

guestList.shift();

guestList.unshift('Haider');
guestList.push('Umair','Khurram' ,'Muneed')

guestList.forEach((g) => {
    console.log(`Hey ${g} , this is invitation to dinner at my place at time`);
})