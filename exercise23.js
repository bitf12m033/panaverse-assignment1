let car = 'Mehran';

console.log('1 Is car ===Mehran ? I predict True , Actually is ',  car === 'Mehran');
console.log(`2 Is car.toUpperCase() === 'MEHRAN'\ ? I predict True , Actually is `, car.toUpperCase() === 'MEHRAN');
console.log(`'3 Is car ===Mehran ? I predict True , Actually is '`,  car.toUpperCase() === 'mehran'.toUpperCase());
console.log(`'4 Is car ===Mehran ? I predict false , Actually is '`, car.toLowerCase() === 'Mehran');
console.log(`'5 Is car ===Mehran ? I predict True , Actually is '`,  car.toLowerCase() === 'Mehran'.toLowerCase());
console.log(`'6 Is car ===Mehran ? I predict True , Actually is '`,  car.toLowerCase() === 'MEHRAN'.toLowerCase());
console.log(`'7 Is car ===Mehran ? I predict false , Actually is '`,  car.toLowerCase() !== 'mehran');
console.log(`'8 Is car ===Mehran ? I predict false , Actually is '`,  car.toLowerCase() !== 'Mehran'.toLowerCase());
console.log(`'9 Is car ===Mehran ? I predict false , Actually is '`,  car.toLowerCase() === 'Mehran');
console.log(`'10 Is car ===Mehran ? I predict True , Actually is '`, car.toLowerCase() === 'mehran');