const make_album = (artist , album , tracks = 0) => {
    const albumObj = new Object();
    albumObj.artist = artist;
    albumObj.album = album;
    if(tracks > 0)
        albumObj.tracks = tracks;

    return albumObj
}

console.log(make_album('metallica', 'ride the lightning'));
console.log(make_album('beethoven', 'ninth symphony'));
console.log(make_album('willie nelson', 'red-headed stranger'));
console.log(make_album('willie nelson', 'red-headed stranger',10));