var startPage = {
	title: "Choose your new path",
	opts : [
		{title: 'Development', desc: 'Are you interested in creating applications?'},
		{title: 'Intro to CS', desc: 'Are you new to CS?'},
		{title: 'Sectors', desc: 'Are you interested in learning about the real-life applications of CS?'}
	]
};

var developmentPage = {
	title:"Development",
	opts: [
		{title: 'Mobile', desc: 'Are you interested in developing mobile apps?'},
		{title: 'Web Apps', desc: 'Are you interested in developing apps for the web?'}
	]
};

var introPage = {
	title:"Intro to CS",
	opts: [
		{title: 'Algorithms', desc: ''},
		{title: 'Data Structures', desc: ''}
	]
}

var sectorsPage = {
	title:"Sectors",
	opts: [
	]
}

var blockColors= ['#3276b1','#d2850b','#47a447','#d2322d'];

var pageView = startPage;

var queryArray = [];

function toggleVisibility(divid) {
    if (divid="development"){
        document.getElementById("development").style.visibility = "visible";
    } else if (divid="intro") {
        document.getElementById("intro").style.visibility = "visible";
    } else if (divid="sectors") {
        document.getElementById("sectors").style.visibility = "visible";
    }
};

function changeTitle(newTitle) {
	var s = document.getElementById('pageTitle').innerText = newTitle;
};

function updatePage(pageName) {
	if(pageName === 'development') {
		pageView = developmentPage;
	} else if (pageName === 'intro') {
		pageView = introPage;
	} else if (pageName === 'sectors') {
		pageView = sectorsPage;
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

		var modalLink = document.createElement("a");
		modalLink.className = "portfolio-link";
		modalLink.setAttribute('href',"href='#developmentModal'");
		//TODO: change href to better modal
		modalLink.setAttribute('onclick',"updatePage('development')");

		var jumboBlock = document.createElement("div");
		jumboBlock.className = "jumbotron";

		//TODO: set background color
		with(jumboBlock.style){
			color: "#FFFFFF";
			backgroundColor: "#47a447";
			textAlign: "center";
			width: "400px";
			height: "400px";
		};

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

	//document.createElement("H3")...
};
