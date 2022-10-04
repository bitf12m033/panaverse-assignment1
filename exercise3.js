const titleCase = (str) =>{
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
let name='Umer malik';

console.log('Lower Case',name.toLowerCase());
console.log('Upper Case',name.toUpperCase());
console.log('Title Case',titleCase(name));

