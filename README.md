# Project Overview

## Project Schedule

| Day   | Deliverable                                  | Status     |
| ----- | -------------------------------------------- | ---------- |
| Day 1 | Project Approvals                            | Complete |
| Day 1 | Wireframes / Priority Matrix / Timeline      | Complete |
| Day 1 | Core Application Structure (HTML, CSS, etc.) | Complete |
| Day 2 | MVP functionality                            | Complete |
| Day 3 | MVP responsive                               | Complete |
| Day 4 | MVP & Bug Fixes                              | Complete |
| Day 4 | Possible Post MVP                            | Complete |
| Day 5 | Final Touches                                | Complete |
| Day 5 | Present                                      | Incomplete |

## Project Description

I like portfolios with darker color themes and want to start with page with just a single background and a title. After that keeping a more minimal approach that will change some things on hover.

[The font and minimalist style of this website is one of my favroites](https://www.marvinschwaibold.com/)

[The muted coloring with large lettering is something that I really like in the design of this website](https://wakawaka.world/)

[This is an accounting website with similar design](https://sealco.ca/)

[This is a simple design for a contact page that I will probably go with something similar.](https://dev.zeroqode.com/contact)

[Though I like the design of the contact form on this page.](https://focuslabllc.com/contact)

[The scrolling transitions on this page are awesome.](https://www.northand.ca/)

[A more contemporary looking website that I think in the end mine will look more like.](https://www.turtleinc.com/about/peter-komierowski)

## Google Sheet

[Here](https://docs.google.com/spreadsheets/d/1fwom458n4HiXVLeAwUxy5FJQU75m7EE_lQ9ovRO_ql4/edit#gid=0) is a link to my google sheet that holds all of my projects.

## Wireframes


- [Mobile](https://imgur.com/r9j8Rky)
- [Mobile CONT.](https://imgur.com/9muRtTV)
- [Tablet](https://imgur.com/uGzI6To)
- [Computer](https://imgur.com/93HnAZe)
- [Priorities](https://imgur.com/YEhk8Um)

## Time/Priority Matrix

- [Time/Priority Matrix](https://imgur.com/3rNJCJ4)

### MVP/PostMVP - 5min

These lists constitute what the customer would require our portfolio to have (Minimum Viable Product) and what they would like to have if time allows.

#### MVP

- Landing Page
- Nav Bar
- About me/Profile Picture
- Projects
- Contact
- Footer
- Mobile/Tablet/Laptop views
- Boostrap

#### PostMVP

- Carousel/Movement of projects
- Landing page fade on scroll
- Blinking box at end of landing page

## Functional Components

#### MVP

| Component                 | Priority | Estimated Time | Actual Time |
| ------------------------- | :------: | :------------: | :---------: |
| A: Landing Page functions |    H     |     1.5 hrs     |     1 hr      |
| B: Landing Page style     |    M     |      1 hr      |     1 hr      |
| C: Nav Bar Hamburger      |    H     |     .5 hr      |     .5 hr      |
| D: Nav Bar About me/etc.  |    H     |      1 hr      |     3 hrs      |
| E: About me paragraph     |    M     |      1 hr      |     1 hr      |
| F: About me picture       |    L     |     .5 hr      |     1 hr      |
| G: Project Previews       |    H     |      2 hrs      |     3 hrs      |
| H: Project links          |    H     |      2 hrs      |     1 hr      |
| I: Project styling        |    M     |      1 hr      |     2 hrs     |
| J: Contact Form           |    H     |      2 hrs     |     3 hrs     |
| K: Contact style          |    M     |      1 hr      |     2 hrs      |
| L: Footer buttons         |    H     |      2 hrs      |     1 hr      |
| M: Footer style           |    M     |      1 hr      |     .5 hr      |
| N: Working with API       |    H     |     2 hrs      |     2 hrs     |
| O: Responsive             |    H     |      2 hrs      |    3 hrs      |
| P: Bootstrap              |    H     |      3 hrs      |     5 hrs      |
| Total                     |          |    23.5 hrs    |     30 hrs     |

#### PostMVP

| Component                | Priority | Estimated Time | Actual Time |
| ------------------------ | :------: | :------------: | :---------: |
| Q: Project Hover Opacity |    M     |      2 hr      |     hr      |
| R: Project Carousel      |    L     |      4 hr      |     hr      |
| S: Landing Page fade     |    L     |      3 hr      |     hr      |
| T: Blinking box          |    L     |      2 hr      |     1 hr      |
| Total                    |          |     11 hrs     |     1 hrs     |

## Additional Libraries

<!-- Use this section to list all supporting libraries and their role in the project. -->

- Bootstrap
- JQuery

## Code Snippet

The code below is some cut together bits of Bootstrap that I was proud of putting together that made my projects move on click. 
```
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
```

<!-- Use this section to include a brief code snippet of functionality that you are proud of an a brief description

```
function reverse(string) {
	// here is the code to reverse a string of text
}
``` -->

## Issues and Resolutions

<!-- Use this section to list of all major issues encountered and their resolution. -->

Display: Grid in body was causing the hamburger not to show up in the mobile version.

My whole portfolio had a white line down the right side. I looked for this problem for a couple days for hours going through the HTML line by line and could not find it. At one of our stand ups Kenny went through it with me and we found it in about 2 mins... Sometimes it just takes fresh eyes.


