const magicians = ['Harry Houdini', 'David Blaine', 'Teller']
const show_magicians = (magicians) => {
    magicians.forEach(m => {
        console.log(m);
    });
}

const make_great = (magicians) => {

    const new_mag = magicians.map( magician => magician + ' Great!')
    return new_mag
}

const newmag = make_great(magicians)
show_magicians(magicians)
show_magicians(newmag)