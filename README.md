# Portfolio Website
This website showcases my skills, projects, and experience as a Software Engineer, while also providing quick links to visit my GitHub, LinkedIn, or email. It is built using ReactJS. I will continuously update this site with new projects/experience.
## Running in Development mode
To run this application in development mode, use
### `npm start`
and go to http://localhost:3000 to view it in the browser.
## Deployment
This website is deployed using [pm2](https://www.npmjs.com/package/pm2) through an NGINX proxy. To deploy on a production server, you can use the following method:
#### Install npm, node.js, and pm2
```
sudo apt install nodejs
npm install pm2 -g
```
#### Clone this repository and cd into it
```
git clone https://github.com/joshlopez97/portfolio-site.git
cd portfolio-site/
```
#### Create a production build and run it using pm2
```
npm run build
pm2 serve build
```
