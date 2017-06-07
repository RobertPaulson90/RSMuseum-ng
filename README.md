# RSMuseum-ng [![Build Status](https://travis-ci.org/amivit/RSMuseum-ng.svg?branch=master)](https://travis-ci.org/amivit/RSMuseum-ng)

An Angular web application serving as a front-end, for a separate projects back-end :-) 

Made as part of our 4th semester Datamatiker (Computer Science) education, at Vejle EAL.  
Hosted live at [tech-flex.com/RSMuseum-ng](http://tech-flex.com/RSMuseum-ng/) thanks to GitHub Pages.

## How to build locally & run

Clone the repository. 
`npm install` then `ng serve`

This project was scaffolded with angular-cli 1.0.1.  
`npm install -g @angular/cli` if you don't have the CLI already. Or refer to [their docs](https://github.com/angular/angular-cli/blob/master/README.md). 

## How to Deploy

The following instructions for deploying live, are **only for users with Git-collaborator permissions.**  

### Requirement

Install this node package globally https://github.com/angular-buch/angular-cli-ghpages

`npm i -g angular-cli-ghpages`

### Deployment

Build the app for production:

`ng build --prod --base-href "http://tech-flex.com/RSMuseum-ng/"`

Then deploy with the new angular-cli-ghpages tool!

`ngh`

