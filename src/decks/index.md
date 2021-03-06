htmltitle: Building the “Front Half” of Your App (With Grunt)
class: center, middle, title

# Building the &ldquo;Front Half&rdquo;<br> of Your App
## (With Grunt)

![](images/grunt-logo-no-wordmark.svg)

.right[
  &ldquo;Cowboy&rdquo; Ben Alman  
  Bocoup  
]

---
class: center, middle, orange

# What is Grunt?

--
## A task runner.

--
## In JavaScript.

---
class: center, middle, brown

# Why use Grunt?

--
## Automation.

--
## In JavaScript.

---
# But, seriously&hellip;

--
* Huge community = tons of plugins

--
* Some of the best front-end tooling is written in JavaScript

--
* Node.js works pretty much anywhere

--
* Continuous integration

--
* IDE support

---
class: brown
## Huge community = tons of plugins

--
[![](images/grunt-plugins.png)](http://gruntjs.com/plugins/lint)

---
class: orange
## Some of the best front-end tooling is written in JavaScript

--
* JSHint, JSLint, JSCS, Esprima

--
* Stylus, LESS

--
* CoffeeScript, TypeScript, LiveScript

--
* jade, handlebars, Lo-dash, Dust

--
* Jasmine, Mocha, QUnit, Nodeunit, Karma

--
* RequireJS, UglifyJS, webpack, browserify

---
## Node.js works pretty much anywhere

--
[![](images/nodejs-install.png)](http://nodejs.org/download/)

--
### &hellip;and there are Apt / Homebrew / chocolatey packages for Node.js too.

---
class: brown
## Continuous integration

--
* Travis CI [![](https://travis-ci.org/gruntjs/grunt.svg)](https://travis-ci.org/gruntjs/grunt) (linux)

--
* AppVeyor [![](https://ci.appveyor.com/api/projects/status/32r7s2skrgm9ubva/branch/master)](https://ci.appveyor.com/project/gruntjs/grunt) (Windows)

--
* Jenkins (DIY)

--
* Or whatever service you want to use, because Grunt uses standard exit codes, just like every other CI tool

---
class: orange
## IDE support!!!

--
### This is pretty new, but WebStorm just added a Grunt console!

[![](images/webstorm-grunt.png)](http://www.jetbrains.com/webstorm/)

---
class: center, middle

# What about the &ldquo;How?&rdquo;

---
# You need to know a few basic things&hellip;

--
* package.json (Npm)

--
* Gruntfile.js (Grunt)

--
* The Grunt CLI

---
class: orange
## package.json (Npm)

--
### This JSON file lists project dependencies, and looks something like this:

```js
{
  "name": "my-project-name",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "^0.4.4",
    "grunt-contrib-jshint": "^0.10.0",
    "grunt-contrib-nodeunit": "^0.3.3",
    "grunt-contrib-uglify": "^0.4.0"
  }
}
```

--
1. Create it with the `npm init` command, a tool like Yeoman, or by hand

--
2. Commit it into your project

--
3. Just type `npm install` to install all the dependencies in package.json

--
4. Install new dev dependencies with `npm install --save-dev grunt-plugin-name`


---
class: brown
## Gruntfile.js (Grunt)

--
### This JavaScript file tells Grunt what to do, and looks something like this:

```js
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! ${pkg.name} ${grunt.template.today("yyyy-mm-dd")} */\n'
      },
      build: {
        src: 'src/${pkg.name}.js',
        dest: 'build/${pkg.name}.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};
```

---
## The Grunt CLI

--
* Install this once, globally, per machine with `npm install -g grunt-cli`

--
* This puts the `grunt` command into the system path, so you don't have to type `./node_modules/.bin/grunt` or `npm grunt` every time

--
* All it really does is finds the project Npm-installed grunt lib, and runs it

---
class: center, middle, orange

# Examples



---
# More info&hellip;

* [gruntjs.com &ldquo;Getting Started&rdquo; guide](http://gruntjs.com/getting-started)
* [@gruntjs on Twitter](https://twitter.com/gruntjs)
* [\#gruntjs on irc.freenode.net](http://webchat.freenode.net/)

## (Thanks!)

.right[
  &ldquo;Cowboy&rdquo; Ben Alman  
  Bocoup  
]
