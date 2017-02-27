# Boilerplate for my preferred front-end development setup

## Description
This boilerplate comes with some configuration according to a front-end workflow that I like.
Taken from the Udemy course [Git a Web Developer Job: Mastering the Modern Workflow](https://www.udemy.com/git-a-web-developer-job-mastering-the-modern-workflow/learn/v4/overview)

It includes:
- Gulp-configuration for browsersync, webpack, creating sprites, postcss and creating deployment builds
- Webbpack-config
- Package.json for dependencies (web and dev)

## Instructions & Config
- Change package name in package.json if needed
- Run `npm install` to install dev and prod dependencies.

### The Gulp folder
Tasks can be ommited as wished, but dependencies must manually be removed.
- In the **tasks**-folder are the following tasks
	- **build** - Minifies/uglifies JavaScript and css using usemin, optimizes images, copies all relevant files to the docs folder and enables a preview through the `gulp previewBuild`. Dependencies: `icons`-task in sprites.js.
	- **watch** - Fires up a browsersync-server. Run the application by the command `gulp watch`.
	- **modernizr** - Sets up support for older browsers.
	- **scripts** - Compiles JavaScript using webpack. looks for *App.js* for general scripts and *Vendor.js* for external scripts, such as JQuery. Dependencies: **modernizr**
	- **sprites** - Creates a combined sprite for all separate svg-files in */app/assets/images/icons*, and creates css for it using a template in folder */gulp/templates*. The `css`-file for the available icons are located in *app/assets/styles/base/_sprite.css*. Name the `svg`-files as you want the `css`-classes to be named.
	- **styles** - Sets up postcss. The used components, which of course can be omitted or complemented as desired, are: `autoprefixer`, `postcss-import`, `postcss-mixins`, `postcss-simple-vars`, `postcss-nested`, `postcss-hexrgba`. Dependencies: `icons`-task in sprites.js


### The App folder
The app folder contains the development version of the app, to be compiled by the build script upon deployment.
It's pretty straight forward.
- In the **assets** folder we find
	- **images** - A folder for all the icons and images used in the application. The subfolder *sprites* is generated by the `sprites`-gulp task.
	- **scripts** -  A folder for all front end scripts. Recommended structure is a central *App.js*, which imports desired modules from the modules folder, which contains classes for specific gui-modules. The `scripts`-gulp task expects *App.js* and *Vendor.js*. There are some modules included, just delete them if unwanted.
	- **styles** - Using bem, each block resides in the folder *modules*. Global styles are placed in *base*. The project comes preconfigured with *base/_global.css, base/_mixins.css, base/_variables.css* and *styles.css*.
	- **tmp** - The folder to which compiled CSS and JavaScript are put. Index.html refers to these locations.
	- **index.html** - The index file for the HTML-markup.
