//
// irenepolnyi.com javascript
//

$(document).ready(function(){

  // Fade-in flashes
  // setTimeout( function(){ $('.flash').fadeIn('slow'); }, 1000 );
  
  // Load Tweet
  $("#twitter").tweet({
    username: "ireneface",
    join_text: "auto",
    // avatar_size: 32,
    count: 1,
    auto_join_text_default: "I said,",
    auto_join_text_ed: "I",
    auto_join_text_ing: ": ",
    auto_join_text_reply: "I replied to",
    auto_join_text_url: "I was checking out",
    loading_text: "Loading..."
  });

  // Irene's flickr photos
  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=22038747@N00&lang=en-us&format=json&jsoncallback=?", function(data){    
    $.each(data.items, function(i,item){
      $("<img/>").attr("src", item.media.m).appendTo(".flickr.mine").wrap("<a style='noborder' href='" + item.link + "'></a>");
      if(i == 3) { return false; }
    });
    cyclify('.flickr.mine');
  });  
  
  // photos tagged of Irene
  // FIXME DRY with above
  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=irene+polnyi&lang=en-us&format=json&jsoncallback=?", function(data){    
    $.each(data.items, function(i,item){
      $("<img/>").attr("src", item.media.m).appendTo(".flickr.of-me").wrap("<a style='noborder' href='" + item.link + "'></a>");
      // if(i == 3) { return false; }
      if(i == 0) { return false; }      
    });
    // cyclify('.flickr.of-me');
  });
  
});


function cyclify(what){
  return $(what).cycle({
    // timeout: 0,
    // next: '#next',
    // prev: '#prev',
    fx: 'fade',
    speed: 'slow'
  });  
}
