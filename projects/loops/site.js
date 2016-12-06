var output = document.querySelector( "#output" );
var outputList = "<ul>";
var counter = 100;

while( counter > 0 ){
  if( counter % 15 === 0 ){
      // console.log( "FizzBuzz" );
    outputList += "<li>FizzBuzz</li>";
  }
  else if( counter % 5 === 0 ){
      // console.log( "Fizz" );
    outputList += "<li>Fizz</li>";
  }
  else if( counter % 3 === 0 ){
      // console.log( "Buzz" );
    outputList += "<li>Buzz</li>";
  }
  else{
    // console.log( counter );
    outputList += "<li>" + counter + "</li>";
  }

  counter--;
}

// output.innerHTML = "<h3>Hello, I came from site.js</h3>";

outputList += "</ul>";

output.innerHTML = outputList;


// ROCK PAPER SCISSORS
var getComputerChoice = function(){
  var computerChoice = "scissors";
  var rng = Math.random();

  if( rng < 0.33 ){
    computerChoice = "rock";
  }
  else if( rng < 0.66 ){
      computerChoice = "paper";
  }

  return computerChoice;
}

var getWinner = function( computerChoice, userChoice ){
    var winner = "computer";
    var lowerCaseUserChoice = userChoice.toLowerCase();

    if( computerChoice === "scissors" && lowerCaseUserChoice === "rock" ){
      winner = "user";
    }
    else if ( computerChoice === "paper" && lowerCaseUserChoice === "scissors" ){
        winner = "user";
    }
    else if ( computerChoice === "rock" && lowerCaseUserChoice === "paper" ){
        winner = "user";
    }
    return winner;
}

var validateUserChoice = function( userChoice ){
  var lowerCaseUserChoice = userChoice.toLowerCase();

  return lowerCaseUserChoice === "rock" ||
  lowerCaseUserChoice === "paper" ||
  lowerCaseUserChoice === "scissors";
}


var runRound = function (){
    var userChoice = prompt( "What would you like to play? Rock, Paper, or Scissor, please" );
    var computerChoice = getComputerChoice();
    var winner = getWinner( computerChoice, userChoice );

    if( !validateUserChoice( userChoice ) ){
      alert("Please input a valid command!" );

      runRound();
    }
      else{
        if( computerChoice === userChoice ){
          alert( "There was a tie!");

          runRound();
        }
        else{
          alert( "The winner was " + winner );
        }
      }
                // 11/19/16 COMMNENTED OUT MY CODE AND REPLACED WITH ALEX'S CODE
                //     var rng = Math.random();
                    // var computerChoice = "Scissors";
                //     var winner = "computer";
                //
                //     if( rng < 0.33 ){
                //       computerChoice = "Rock";
                //       }
                //     else if( rng < 0.66){
                //       computerChoice = "Paper";
                //     }
                //
                    // if( computerChoice === "Scissors" && userChoice === "Rock" ){
                    //   winner = "user";
                    // }
                    // else if ( computerChoice === "Paper" && userChoice === "Scissors" ){
                    //     winner = "user";
                    // }
                    // else if ( computerChoice === "Rock" && userChoice === "Paper" ){
                    //     winner = "user";
                    // }

                    // if(computerChoice === userChoice ){
                    //   alert( "There was a tie!" );
                    //
                    //   runRound();
                    // }
                    // else{
                    //   alert( "The winner was " + winner );
                    // }
}
var roundCounter = 1;

while( roundCounter <= 5){
  runRound();


  roundCounter++;
}
