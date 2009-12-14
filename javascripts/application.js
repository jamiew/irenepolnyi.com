//
// irenepolnyi.com javascript
//

$(document).ready(function(){

  // Fade-in flashes
  // setTimeout( function(){ $('.flash').fadeIn('slow'); }, 1000 );
  
  // Load Tweet
  $("#twitter").tweet({
    username: "ireneface",
    count: 1,    
    join_text: "auto",
    // avatar_size: 32,
    auto_join_text_ed: "",
    auto_join_text_ing: ": ",
    auto_join_text_reply: "Replied to",
    auto_join_text_url: "Checking out",
    auto_join_text_default: ":",
    loading_text: "Loading..."
  });

  // Irene's flickr photos, and photos tagged of her
  var photoSets = { 
      '.flickr.mine': 'http://api.flickr.com/services/feeds/photos_public.gne?id=22038747@N00&lang=en-us&format=json&jsoncallback=?',
      // '.flickr.of-me': 'http://www.flickr.com/search/?ss=2&w=all&q="irene+Polnyi"+or+"ireneface"+or+"irenepolnyi"&m=text&format=json&jsoncallback=?'
      '.flickr.of-me': 'http://api.flickr.com/services/feeds/photos_public.gne?tags="irene+polnyi"&lang=en-us&format=json&jsoncallback=?'
    };
  $.each(photoSets, function(selector, url){
    $.getJSON(url, function(data){    
      $.each(data.items, function(i,item){
        $("<img/>").attr("src", item.media.m).appendTo(selector).wrap("<a style='noborder' href='" + item.link + "'></a>");
        if(i == 0) { return false; } // Just 1 please; Flickr's photos_public doesn't support limit/count/length
      });
      // cyclify(selector);
    });  
  });
    
});


// Turn a <ul> of images into a slideshow using jquery.cycle
function cyclify(what){
  return $(what).cycle({
    // timeout: 0,
    // next: '#next',
    // prev: '#prev',
    fx: 'fade',
    speed: 'slow'
  });  
}

// Tumblr callback
function renderTumblr(data){
  var post = data['posts'][0];
  var img = '<a href="'+post['url-with-slug']+'"><img src="'+post['photo-url-250']+'" /></a>';
  $(document).ready(function(){
    $('.tumblr').html(img);
  });
}