console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
  let song ={
    title: title,
    artist: artist,
    yearPublished: yearPublished
  } //end object song
  collection.push(song);  //adding object song into collection array
  return song;
}

console.log('Adding 1st song:', addToCollection('Certified Lover Boy', 'Drake', '2021'));
console.log('Adding 2nd song:', addToCollection('Donda', 'Kanye West', '2021'));
console.log('Adding 3rd song:', addToCollection('Senjutsu', 'Iron Maiden', '2021'));
console.log('Adding 4th song:', addToCollection('Stronger', 'Kanye West', '2007'));
console.log('Adding 5th song:', addToCollection('Planet Her', 'Doja Cat', '2021'));
console.log('Adding 6th song:', addToCollection('Heartless', 'Kanye West', '2008'));
console.log(collection);
