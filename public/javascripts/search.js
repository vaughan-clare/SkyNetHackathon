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


/* Use this string to construct link: https://www.youtube.com/watch?v=48HPKLZ5b2w" Funny Cat Videos Ever 2014 Funny Cat Videos 2014 Funny ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/48HPKLZ5b2w/default.jpg"},"medium":{"url":"https://i.ytimg.com/vi/48HPKLZ5b2w/mqdefault.jpg"},"high":{"url":"https://i.ytimg.com/vi/48HPKLZ5b2w/hqdefault.jpg"}} */
