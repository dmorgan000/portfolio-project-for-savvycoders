var $title = $( "h1" );
var $output = $( "#output" );
var color = prompt( "What color would you like?");

$title.text( "I'm coming from jQuery" );
$output.html( "<ul></ul>" );


console.log($title.text() );
console.log($output.html() );
console.log($output.text() );


$title.animate( {
    // "text-align": "right",
    "font-size": "600%",
    "duration": "20000"
//       "complete": function(){
//        }
});

$title.css( {
  "color": color,
  "text-align": "center"
} );

$output.append( "This text is appended");
$output.append("<h3>This is Header 3 using outout.append</h3>" );

$( "#output > ul" ).append(
  $( "<li>" ).text( "Here is list item 1" ),
  $( "<li>" ).text( "Here is list item 2" )
);

$( "#output" ).on( "mouseenter", "li", function(){
    $( this ).addClass( "highlight" );
} );

$( "#output" ).on( "mouseleave", "li", function(){
    $( this ).removeClass( "highlight" );
} );

// $( output" ).append(
//     $( "input[type=]")
// );

// $( "h1" ).text("Im coming from jQuery" );
// console.log( $(h1").text)...
