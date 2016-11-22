var $title = $( "h1" );
var $output = $( "#output" );
var color = prompt( "What color would you like?");

$title.text( "I'm coming from jQuery" );
$output.html( "<ul></ul>" );


console.log($title.text() );
console.log($output.html() );
console.log($output.text() );

$title.animate( {

    "text-align": "left"
    },
    "font-size": "600%",
    {
    "duration": 2000,
    // "complete": function(){
    // }
  } );

$title.css( {
"color": color,
"text-align": "center"
} )

$output.append( "This text is appended");
$output.append("<h3>This is Header 3 using outout.append</h3>" );

$( "#output > ul" ).append(
    $( "<li>" ).text( "Here is a new list item" ),
    $( "<li>" ).text( "Here is a new list item" )
);

// $( "h1" ).text("Im coming from jQuery" );
// console.log( $(h1").text)...
