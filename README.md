# SeekJob

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4 and then powered by Express and Mongo, and obviously Node.js. it's a MEAN project.

The main idea behind this project is to create a simple job platform to post a job and list jobs, though upload candidates resume (from Linkedin PDF) is a good feature that you can experiment here.

Other technologies used here: Bootstrap 4, CORS requests, [textract](https://github.com/deanmalmgren/textract) PDF Reader and special thanks to [Resume parser](https://github.com/nsatija/nodejs-resume-parser)
## Development server

#### Client Side
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Server Side
Run `node server.js` for a server to provide CORS rest api on `http://localhost:3000/` 
if you wish to automatically reload once you made a change on any file run `nodemon server.js`. For this you need to install nodemon first `npm install -g nodemon`

## Sample PDF file 
Navigate to `./uploads` to see a sample PDF file here.

## Library Requirements and Instruction
 - First, go to [nodejs](http://nodejs.org/) site, download and setup it for you platform
 - Then, clone this repo `git clone https://github.com/aminkh17/seek-job.git [Your New Folder Name]`
 - Run `npm install` in terminal from root folder of the new project to setup dependencies
 - At this moment application will work fine, but! By default it supports only `.TXT` and `.HTML` text formats. For better performance you should install at least support of `.PDF` (and `.DOC`). Here is instructions, how to do it from [textract README](https://github.com/dbashford/textract#requirements) file:
	 - `PDF` extraction requires `pdftotext` be installed, [link](http://www.foolabs.com/xpdf/download.html). Or you can add following folder to your PATH folder on Windows `CMD> PATH %PATH%;[Full PATH OF THE BIN FOLDER]`
	 - `DOC` extraction requires `catdoc` be installed, [link](http://www.wagner.pp.ru/~vitus/software/catdoc/), unless on OSX in which case textutil (installed by default) is used.
	 - `DOCX` extraction requires `unzip` be available (e.g. `sudo apt-get install unzip` for Ubuntu)
		
> Please, note, that it's not necessary install support of all formats but preferably. As for me, I didn't get setup `catdoc` for `.DOC` files under Windows 7, so I played only with `.TXT`, `.HTML`, `.PDF` formats, but I know, it will also work with the rest formats :)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
