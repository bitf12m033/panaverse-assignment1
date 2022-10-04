const city_country = (name , country='Pakistan') => {
   return `${name}, ${country}`;
}

 console.log(city_country('Lahore'));
console.log(city_country('Islamabad'));
console.log(city_country('Tehran', 'Íran'));
