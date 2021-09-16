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
} //end fx

console.log('Adding 1st song:', addToCollection('Certified Lover Boy', 'Drake', '2021'));
console.log('Adding 2nd song:', addToCollection('Donda', 'Kanye West', '2021'));
console.log('Adding 3rd song:', addToCollection('Senjutsu', 'Iron Maiden', '2021'));
console.log('Adding 4th song:', addToCollection('Stronger', 'Kanye West', '2007'));
console.log('Adding 5th song:', addToCollection('Planet Her', 'Doja Cat', '2021'));
console.log('Adding 6th song:', addToCollection('Heartless', 'Kanye West', '2008'));
console.log(collection);


function showCollection(array){
  console.log(`Number of songs in collection: ${array.length}`);
  for(let i in array){
    console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`);
  }     //end for loop
} //end fx

console.log(showCollection(collection));    //testing fx showCollection


function findByArtist(artist){
  let result = [];
  for(i in collection){                        //search every index in array
    if(artist === collection[i].artist){       //if parameter equals artist of songs
      result.push(collection[i]);               //add song to result array
    } //end if
  } //end for loop
  return result;
} //end fx

console.log('Finding Kanye West songs:', findByArtist('Kanye West'));
console.log('Finding Bruno Mars songs:', findByArtist('Bruno Mars'));
