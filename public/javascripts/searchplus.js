// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

  // Search for a specified string.
function searchplus(query) {
  var q = query //$('#query').val();
  var request = gapi.client.plus.activities.search({
    query: q,
    key: 'AIzaSyAP31pN6HgLcFnPURUSkDFK23slAUkvYiI',
    maxResults: '5'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container-plus').html('<pre>' + str + '</pre>');
  });
}