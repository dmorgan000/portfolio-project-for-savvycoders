var $input = $( "textarea.blog-poster");
var $submit = $( "button.submit-post" );
var $content = $( ".content" );
var posts = [];                            // assign an array to posts variable
var request = $.ajax( {                    // use the ajax function to request the promised data
    "url": "http://jsonplaceholder.typicode.com/posts"
} );

var getPostHtml = function( post ){        // return the input value
  return "<section class='post'>" + post + "</section><hr>";
}

var appendPosts = function( posts ){      //create array
    var parsedPosts = posts                 //assign posts array to parsedPosts variable
    .filter(                              // accept only input values greater than 10
      ( post ) => post.length > 10
    )
    .map( getPostHtml );                  // invoke getPostHtml on each input vlaue in posts array
                                          // get PostHtml returns the input value

    $content.append( parsedPosts );        //append input values in the array
}

var publishPosts = function(){
  appendPosts( posts );

  posts = [];                // reassign varible to a blank array

  $( "button.publish-post").remove(); //remove Publish Now button
}

  var publishAjaxPosts = function( data ){   //create function to access Ajax data
}

var addPublishPostButton = function(){
  $submit.before( "<button class='publish-post'>Publish Now</button>" );  //insert html into the DOM, display the Publish Now button to the left of the Save now button

  $( "button.publish-post" ).on( "click", publishPosts);  //do this when click occurs
}

request.then( function( postData ){     // assign the ajax array. postData is the array wiht objects in the array
  var newPosts = postData.map(
    ( post ) => post.body                // get just the "body" property of the Ajax array
  );

  appendPosts( newPosts );
} );

//   posts = posts.concat( newPosts);
// } );

$submit.on( "click", function(){           //when the button is clicked submitting the value
  var post = $input.val();                 // add the input value

  if ( post){
    posts.push( post );                   //put the value entered to the end of the array

    $input.val("");                       // clear out the textarea

    $( this ).trigger( "submit:post" );  //the trigger relates to the $submit event, or the target of the event
    }
} );

$submit.on( "submit:post", function(){   //listen for the submit event
  if( posts.length === 1 ) {
    addPublishPostButton();             //display the Publish button
  }
} );
