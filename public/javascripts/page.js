var blockColors= ['#d2850b','#47a447','#d2322d','#3276b1'];

var pageView = startPage;

var queryString = "";

function changeTitle(newTitle) {
	var s = document.getElementById('pageTitle').innerText = newTitle;
};

function buildQuery(queryString) {

};

function updatePage(pageName) {

	var isFound = false;
	for(var i = 0; !isFound && i < pageArray.length; i++) {
		console.log(pageName);
		console.log(pageArray[i].title);
		if (pageArray[i].title == pageName){
			pageView = pageArray[i];
			isFound = true;
			console.log(pageView);
		}
	}

	changeTitle(pageView.title);
	//remove children of options-row
	var optsRow= document.getElementById("options-row");
	while (optsRow.firstChild) {
	    optsRow.removeChild(optsRow.firstChild);
	}
	//add children for new page
	for(var i = 0; i < pageView.opts.length; i++) {
		var blockContainer = document.createElement("div");
		blockContainer.className = "col-sm-4 portfolio-item";
		if (pageView.opts[i].childPage) {
			blockContainer.setAttribute('onclick',"updatePage('"+pageView.opts[i].childPage+"');");
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

	console.log(queryString);
	//document.createElement("H3")...
};
