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
	changeTitle(pageName.title);
	document.createElement("H3");
};
