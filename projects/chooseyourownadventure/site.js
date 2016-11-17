var mainCharacter = {};
var sideCharacter = {};
var sideCharacter = {};

mainCharacter.name = prompt( "What's your name?" );
sideCharacter.name = prompt( "Whats' your friend's name?" );

console.log( mainCharacter );

console.log (sideCharacter );

var story = {
  "start": {
    "narrative": mainCharacter.name + " and " + sideCharacter.name + " are going to the mall. ",
    "prompt": "Will they go to the bookstore or shoe store? "
  },
  "bookstore": {
    "narrative": mainCharacter.name + " and " + sideCharacter.name + " are going to the bookstore!  ",
    "prompt": "Will they use cash or charge? "
  },
  "shoestore": {
    "narrative": mainCharacter.name + " and " + sideCharacter.name  + " are going to the shoe store. "
  },

  "cash": {
    "narrative": mainCharacter.name + " and " + sideCharacter.name  + " will pay cash. "
  },

  "charge": {
    "narrative": mainCharacter.name + " and " + sideCharacter.name  + " will use their charge cards. "
  }
}

alert( story.start.narrative );

var response = prompt(story.start.prompt );
  if ( response === "bookstore" ) {
    alert(story.bookstore.narrative );
    response = prompt( story.bookstore.prompt );

    if ( response === "bookstore" ){
      alert (story.bookstore.narrative );
    }

  }
  else if ( response === "shoestore" ){
      alert(story.shoestore.narrative );
  }

  else if ( response === "cash" ){
      alert(story.cash.narrative );
  }

  else if ( response === "charge" ){
      alert(story.charge.narrative );
  }
  else{
    alert( "You didn't input a valid entry! Try again.")
  }
