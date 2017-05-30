//
// irenepolnyi.com javascript
//

$(document).ready(function(){

  // loadFlickr();

  // Fade-in flashes
  // setTimeout( function(){ $('.flash').fadeIn('slow'); }, 1000 );
});

function loadFlickr(){
  // Irene's flickr photos, and photos tagged of her
  var photoSets = {
      '.flickr.mine': 'http://api.flickr.com/services/feeds/photos_public.gne?id=22038747@N00&lang=en-us&format=json&jsoncallback=?',
      '.flickr.of-me': 'http://api.flickr.com/services/feeds/photos_public.gne?tags="irene+polnyi"&lang=en-us&format=json&jsoncallback=?'
    };

  $.each(photoSets, function(selector, url){
    $.getJSON(url, function(data){
      $.each(data.items, function(i,item){
        $("<img/>").attr("src", item.media.m).appendTo(selector).wrap("<a style='noborder' href='" + item.link + "'></a>");
        if(i == 0) { return false; } // Just 1 please; Flickr's photos_public doesn't support limit/count/length
      });
    });
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
