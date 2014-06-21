// After the API loads, call a function to enable the search box.
function handleAPILoaded() {

};

// Search youtube for a specified string.
function youtubeSearch(query) {
  var q = query;
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    key: 'AIzaSyAP31pN6HgLcFnPURUSkDFK23slAUkvYiI',
    maxResults: '10',
    order: 'date'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container-yt').html('<pre>' + str + '</pre>');
  });}

//Build a Search String for third party sites such as coursera, udacity, mit, etc...
function googleSearch(query){
  // var query = "mobile+development"
  var site1 = 'http%3A%2F%2Fwww.coursera.org%2F';
  var resource1 = 'coursera';
  var site2 = 'https%3A%2F%2Fwww.udacity.com%2F';
  var resource2 = 'udacity';

  // example - https://www.google.com/search?as_q=Mobile+development+beginner+java&as_sitesearch=http%3A%2F%2Fwww.coursera.org%2F
  var glink = 'https://www.google.com/search?as_q=' + query;
  var link1 = glink + '&as_sitesearch='+ site1;
  var link2 = glink + '&as_sitesearch='+ site2;

  //update page
  document.getElementById(resource1).href = link1;
  document.getElementById(resource1).innerHTML = "Coursera Resources";
  document.getElementById(resource2).href = link2;
  document.getElementById(resource2).innerHTML = "Udacity Resources";
}

/* Use this string to construct link: https://www.youtube.com/watch?v=48HPKLZ5b2w" Funny Cat Videos Ever 2014 Funny Cat Videos 2014 Funny ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/48HPKLZ5b2w/default.jpg"},"medium":{"url":"https://i.ytimg.com/vi/48HPKLZ5b2w/mqdefault.jpg"},"high":{"url":"https://i.ytimg.com/vi/48HPKLZ5b2w/hqdefault.jpg"}} */
