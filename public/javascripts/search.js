// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    key: 'AIzaSyAP31pN6HgLcFnPURUSkDFK23slAUkvYiI',
    maxResults: '10',
    order: 'date'

  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}

* Store the proper data to tracks and artists list 
*/
void onDataLoaded(responseText)
{
  JsonObject data = new JsonObject.fromJsonString(responseText);
  print(data.length);
  data = data.toptracks;
  
  for (var x = 0; x < data.track.length; x++)
  {
    //print("Track Name: "+ data.track[x].name.toString());
    String track = data.track[x].name.toString().trim();
    //print("Artist: "+data.track[x].artist.name.toString());
    String artist = data.track[x].artist.name.toString().trim(); 
    Track_Obj current = new Track_Obj(); 
    current.Artist = artist;
    current.Track = track; 
    //Add the Current Track to the List
    tracks_list.add(current); 
  }
  


//Build a Search String for third party sites such as coursera, udacity, mit, etc...

function googleSearch(query, site){
  // var query = "mobile+development"
  // var site = 'http%3A%2F%2Fwww.coursera.org%2F'
  // example - https://www.google.com/search?as_q=Mobile+development+beginner+java&as_sitesearch=http%3A%2F%2Fwww.coursera.org%2F
  var link = 'https://www.google.com/search?as_q=';
  link = link + query + '&as_sitesearch='+ site;
  // link.concat('&as_sitesearch=');
  // link.concat(site);
  $('href='+link).appendTo(".google-search");
}

/* Use this string to construct link: https://www.youtube.com/watch?v=48HPKLZ5b2w" Funny Cat Videos Ever 2014 Funny Cat Videos 2014 Funny ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/48HPKLZ5b2w/default.jpg"},"medium":{"url":"https://i.ytimg.com/vi/48HPKLZ5b2w/mqdefault.jpg"},"high":{"url":"https://i.ytimg.com/vi/48HPKLZ5b2w/hqdefault.jpg"}} */
