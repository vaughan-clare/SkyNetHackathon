var startPage = {
	title: "Choose your new path",
	queryString: '',
	opts : [
		{title: 'Development', desc: 'Are you interested in creating applications?'},
		{title: 'Intro to CS', desc: 'Are you new to CS?'},
		{title: 'Sectors', desc: 'Are you interested in learning about the real-life applications of CS?'}
	]
};
var developmentPage = {
	title:"Development",
	queryString: 'development',
	opts: [
		{title: 'Mobile', desc: 'Are you interested in developing mobile apps?'},
		{title: 'Web Apps', desc: 'Are you interested in developing apps for the web?'}
	]
};
var introPage = {
	title:"Intro to CS",
	queryString: 'beginner cs',
	opts: [
		{title: 'Algorithms', desc: 'Are you interested in problem-solving?'},
		{title: 'Data Structures', desc: 'Are you interested in how data is organized?'}
	]
}
var sectorsPage = {
	title:"Sectors",
	queryString: "'computer science' careers finance automotive energy entertainment medical security",
	opts: [
	]
}
var mobileLanguagesPage = {
	title:"Mobile",
	queryString: "computer language",
	opts: [
		{title: 'PHP', desc:'', childPage: 'Level', queryString: "php"},
		{title: 'Java', desc:'', childPage: 'Level', queryString: "java"},
		{title: 'Go', desc:'', childPage: 'Level', queryString: "go"},
		{title: 'Python', desc:'', childPage: 'Level', queryString: "python"}
	]
}
var webLanguagesPage = {
	title:"Web Apps",
	queryString: "computer language",
	opts: [
		{title: 'PHP', desc:'', childPage: 'Level', queryString: "php"},
		{title: 'Java', desc:'', childPage: 'Level', queryString: "java"},
		{title: 'Go', desc:'', childPage: 'Level', queryString: "go"},
		{title: 'Python', desc:'', childPage: 'Level', queryString: "python"}
	]
}

var levelPage = {
	title: "Level",
	queryString: "level",
	endPage: true,
	opts: [
		{title: 'Beginner', desc:'Are you just starting out with this language?'},
		{title: 'Intermediate', desc:'Have you used this language a little?'},
		{title: 'Advanced', desc:'Are you highly familiar with this language?'}
	]
}

var pageArray = [startPage, developmentPage,introPage,sectorsPage,mobileLanguagesPage,webLanguagesPage,levelPage];