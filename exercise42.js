var magicians = ['Harry Houdini', 'David Blaine', 'Teller']
const show_magicians = (magicians) => {
    magicians.forEach(m => {
        console.log(m);
    });
}

const make_great = (magicians) => {

    for (let index = 0; index < magicians.length; index++) {
        magicians[index] = magicians[index] + ' Great';
    }
}

make_great(magicians)
show_magicians(magicians)