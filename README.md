# Installation

npm install


# Developing
npx @11ty/eleventy --serve

Then navigate to http://localhost:8080/


# Building

1. run
npx @11ty/eleventy

2. see dist folder for built items


# Files / folder structure

./src/ 
	contains all of the source code for the blogging page itself.

./src/copy-files/
	All content in here will get copied without modification into ./dist/
	in the example, there is a folder img/ in here. This will eventually become ./dist/img/

./src/content
	Contains all of the page content for the blog itself

./src/content/_layouts
	Contains all of the layouts, in which the blog pages will go.
	These files use the nunjucks templating system, with a yaml heading at the top for metadata. Templates can use sub templates using the layout keyword. For more information see 11ty documentation and nunjucks documentation


./src/content/posts/
	The folder which includes the blog posts.
	the posts.json defines some base data for the yaml, which will always be active

./src/content/posts/create-pagination.md
	This creates the pagination pages (/random and /YouTube pages)

./.eleventy.js 
	Contains the configuration for eleventy itself. It contains part of the building functionality


# Documentation

[11ty (eleventy)](https://www.11ty.dev/)

[Markdown](https://www.markdownguide.org/basic-syntax/)

[Nunjucks templating](https://mozilla.github.io/nunjucks/templating.html)

