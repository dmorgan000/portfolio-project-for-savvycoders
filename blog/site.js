var $input = $( "textarea.blog-poster");
var $submit = $( "button.submit-post" );
var $content = $( ".content" );
var posts = [];

$( "button.submit-post" ).on( "click", function(){
  var post = $( "textarea.blog-poster" ).val();

  if(post){
  posts.push( post);

  // remove text from the text area
  $input.val( "");

  $(this ).trigger( "submit:post" );
  }
} );

$submit.on( "submit:post", function(){
  if( posts.length === 1 ) {
    $submit.before( "<button class='publish-post'>Publish Now</button>");
    $( "button.publish-post" ).on( "click", function(){

      for( var i = 0; i < posts.length; i++){

        $content
          .append( "<section class='post'>" + posts[i] + "</section>" )
          .append( "<hr>" );
        }

        posts = [];
        $( "button.publish-post").remove();
    } );
  }
});
