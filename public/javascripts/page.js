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
	//document.createElement("H3")...
};
