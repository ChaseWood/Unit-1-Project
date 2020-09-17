// console.log('app.js');
// console.log('this is $', $);

let sheetUrl =
	'https://docs.google.com/spreadsheets/d/1fwom458n4HiXVLeAwUxy5FJQU75m7EE_lQ9ovRO_ql4/edit?usp=sharing';

let sheetID = '1fwom458n4HiXVLeAwUxy5FJQU75m7EE_lQ9ovRO_ql4';

// below using string interpolation
// let sheetAsJSON = `https://spreadsheets.google.com/feeds/list/${sheetID}/od6/public/values?alt=json`

let sheetAsJSON =
	'https://spreadsheets.google.com/feeds/list/1fwom458n4HiXVLeAwUxy5FJQU75m7EE_lQ9ovRO_ql4/od6/public/values?alt=json';

const render = (projectsArr) => {
	console.log('this is projectArr', projectsArr);
	// this function will add the projects to the dom
	// they will look amazing and beautiful
	projectsArr.forEach((project) => {
		$('.addedProjects').append(`
                <div class="col mb-4">
					<div class="card">
						<img src= ${project.image} class="card-img-top" alt="..." data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
						<div class="collapse" id="collapseExample">
							<div class="card-body">
								<h5 class="card-title">${project.title}</h5>
                                <p class="card-text">${project.description}</p>
                                <a href=${project.gitHubRepo} target="_blank" class="projectBtnsStyle btn btn-primary">Github Repo</a>
                                <a href=${project.gitHubLive} target="_blank" class="projectBtnsStyle btn btn-primary">Live Website</a>
							</div>
						</div>
					</div>
				</div>`);
	});
};

$.ajax({ url: sheetAsJSON }).then((data) => {
	//return a new array of data..best way to do that is what? .map()
	//      plural                         singular
	const projects = data.feed.entry.map((project) => {
		return {
			title: project.gsx$title.$t,
			image: project.gsx$image.$t,
			description: project.gsx$description.$t,
			gitHubRepo: project.gsx$githubrepo.$t,
			gitHubLive: project.gsx$githublive.$t,
		};
	});
    render(projects);
    console.log('this is img link', project.image)
	console.log('this is data:', data.feed.entry[0].gsx$description.$t);
	console.log('this is project:', projects);
});
