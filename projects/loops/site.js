var output = document.querySelector( "#output" );
var counter = 100;

while( counter > 0 ){
  if( counter % 15 === 0 ){
    console.log( "FizzBuzz" );
  }
  else if( counter % 3 === 0 ){
    console.log( "Fizz" );
  }
  else if(counter % 5 === 0 ){
    console.log( "Buzz" );
  }
  else{
    console.log( counter );
  }

  counter--;
}

output.innerHTML = "<h3>Hello I cam from site.js"</h3>;
