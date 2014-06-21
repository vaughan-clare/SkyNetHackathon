var blockColors= ['#d2850b','#47a447','#d2322d','#3276b1'];

var pageView = startPage;

var queryString = "";

function changeTitle(newTitle) {
	var s = document.getElementById('pageTitle').innerText = newTitle;
};

function buildQuery(queryKey) {
	queryString = queryKey + '+' + queryString;
	console.log(queryString);
};

function clearPage() {
	var optsRow= document.getElementById("options-row");
	while (optsRow.firstChild) {
	    optsRow.removeChild(optsRow.firstChild);
	}
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
  	//console.log(response.result.items[1]);
	var youtubeResults = response.result;
	for(var i = 0; i < youtubeResults.items.length; i++) {
		var ref = document.createElement("a");
		ref.className = thumbnail;
		ref.setAttribute("href","www.youtube.com/watch?v="+response.result.items[i].id.videoId);
		var thumbnail = document.createElement("img");
		thumbnail.setAttribute("src",youtubeResults.items[i].snippet.thumbnails.default.url);
		ref.appendChild(thumbnail);
		document.getElementById('block-con').appendChild(ref);
	}

	//document.getElementById("path-container").appendChild('#block-con');

	});
};

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
  //document.getElementById(resource1).setAttribute('href', link1);
  document.getElementById(resource1).innerHTML = "<a href="+link1+">Coursera Resources</a>";
  document.getElementById(resource2).innerHTML = "<a href="+link2+">Udacity Resources</a>";
  // document.getElementById(resource2).href = link2;
  // document.getElementById(resource2).innerHTML = "Udacity Resources";
};

  // Search for a specified string.
function searchplus(query) {
  var q = query //$('#query').val();
  var request = gapi.client.plus.activities.search({
    query: q,
    key: 'AIzaSyAP31pN6HgLcFnPURUSkDFK23slAUkvYiI',
    maxResults: '5'
  });
  request.execute(function(response) {
  console.log(response.result.items[1]);
  var plusResults = response.result;
  var list = document.createElement("ul");
	for(var i = 0; i < plusResults.items.length; i++) {
		var ref = document.createElement("li");
		var anchor = document.createElement('a');
		anchor.setAttribute("href",response.result.items[i].url);
		ref.appendChild(anchor);
		document.getElementById('block-con').appendChild(ref);
	}

	//document.getElementById("path-container").appendChild('#block-con');
	});

};



function showResults(){
	var optsRow= document.getElementById("options-row");
	var blockContainer = document.createElement("div");
	$(blockContainer).attr('id', 'block-con')
	document.getElementById("options-row").appendChild(blockContainer);
	changeTitle('Results');

	var googleResTitle = document.createElement("h2");
	googleResTitle.innerText = "Suggested Resources";
	document.getElementById('block-con').appendChild(googleResTitle);

	//Google Results

	var resource1 = document.createElement('h3');
	$(resource1).attr('id', 'coursera');
	var resource2 = document.createElement('h3');
	$(resource2).attr('id', 'udacity');
	var list = document.createElement('ul');
	list.setAttribute('id', 'ext-res');
	list.appendChild(resource1);
	list.appendChild(resource2);
	document.getElementById('block-con').appendChild(list);
	$(resource2).attr('id', 'udacity');
	$(resource1).attr('id', 'coursera');
	googleSearch(queryString);

	// Load the client interfaces for the YouTube Analytics and Data APIs, which
	// are required to use the Google APIs JS client. More info is available at
	// http://code.google.com/p/google-api-javascript-client/wiki/GettingStarted#Loading_the_Client
	function loadAPIClientInterfaces() {
  		gapi.client.load('youtube', 'v3', function() {
    		handleAPILoaded();
  		});
  	};

  	loadAPIClientInterfaces();
	
	//YouTube
	var youtubeResTitle = document.createElement("h2");
	youtubeResTitle.innerText = "Related Videos";
	document.getElementById('block-con').appendChild(youtubeResTitle);

	var youtubeSearchResults = document.createElement("div");
	$(youtubeSearchResults).className = "search-container-yt";
	document.getElementById('block-con').appendChild(youtubeSearchResults);
	// After the API loads, call a function to enable 
	function handleAPILoaded() {
		youtubeSearch(queryString);
	};
	
	//Google+	
	function loadAPIClientInterfaces2() {
	  	gapi.client.load('plus', 'v1', function() {
	    	handleAPILoaded1();
  		});
	};

  	loadAPIClientInterfaces2();
  	var plusResults = document.createElement("div");
	$(plusResults).className = "search-container-yt";
	$(plusResults).text('Plus results coming soon');
	document.getElementById('block-con').appendChild(plusResults);
	function handleAPILoaded1() {
		searchplus(queryString);
	};
	
};

function updatePage(pageName) {
	var isFound = false;
	for(var i = 0; !isFound && i < pageArray.length; i++) {
		if (pageArray[i].title == pageName){
			pageView = pageArray[i];
			isFound = true;
		}
	}
	if(isFound == false) {
		clearPage();
		showResults();
	} else {
		buildQuery(pageView.queryString);
		changeTitle(pageView.title);
		//remove children of options-row
		clearPage();
		//add children for new page
		for(var i = 0; i < pageView.opts.length; i++) {
			var blockContainer = document.createElement("div");
			blockContainer.className = "col-sm-4 portfolio-item";
			if (pageView.opts[i].childPage) {
				blockContainer.setAttribute('onclick',"buildQuery('"+pageView.opts[i].title+"'); updatePage('"+pageView.opts[i].childPage+"')");
			} else {
				blockContainer.setAttribute('onclick',"updatePage('"+pageView.opts[i].title+"')");
			}

			var modalLink = document.createElement("a");
			modalLink.className = "portfolio-link";

			var jumboBlock = document.createElement("div");
			jumboBlock.className = "jumbotron";
			jumboBlock.style.backgroundColor = blockColors[i];
			jumboBlock.style.color = "#FFFFFF";
			jumboBlock.style.width = "350px";
			jumboBlock.style.height = "350px";

			var blockTitle = document.createElement("h3");
			var titleText = document.createTextNode(pageView.opts[i].title);
			blockTitle.appendChild(titleText);
			var blockDesc = document.createElement("p");
			var descText = document.createTextNode(pageView.opts[i].desc);
			blockDesc.appendChild(descText);

			jumboBlock.appendChild(blockTitle);
			jumboBlock.appendChild(blockDesc);
			//jumbotron complete

			modalLink.appendChild(jumboBlock);
			//modalLink complete

			blockContainer.appendChild(modalLink);
			//block containter complete

			document.getElementById("options-row").appendChild(blockContainer);
		}
	}
};
