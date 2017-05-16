# RSMuseum-ng

An Angular web application as a front-end for a separate projects back-end. Made as part of our 4th semester Datamatiker (Computer Science) education, at Vejle EAL. Hosted live at [tech-flex.com/RSMuseum-ng](http://tech-flex.com/RSMuseum-ng/) thanks to GitHub Pages.

## How to Deploy

For deploying live to http://tech-flex.com/RSMuseum-ng/. **This is only for users with Git-collaborator permissions.** 
### Requirement
Install this node package globally https://github.com/angular-buch/angular-cli-ghpages

`npm i -g angular-cli-ghpages`

### Deployment

Build the app for production:

`ng build --prod --base-href "http://tech-flex.com/RSMuseum-ng/"`

Then deploy with the new angular-cli-ghpages tool!

`ngh`
