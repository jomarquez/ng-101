ng-101
=======

Resources

[Gulp](https://css-tricks.com/gulp-for-beginners/)

[Dashboard Bootstrap Template](http://getbootstrap.com/examples/dashboard/)


Setup Project
======

> `mkdir ng-101`

> `cd ng-101`

> `npm init`

```
    $ npm init
    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.

    See `npm help json` for definitive documentation on these fields
    and exactly what they do.

    Use `npm install <pkg> --save` afterwards to install a package and
    save it as a dependency in the package.json file.

    Press ^C at any time to quit.
    name: (ng-101)
    version: (1.0.0)
    description: an intro to angular-js tutorial
    entry point: (index.js)
    test command:
    git repository: (https://github.com/jomarquez/ng-101.git)
    keywords: ng-101, angular, tutorial
    author: joanna marquez johnson
    license: (ISC)
    About to write to /Users/jjohnson/wwc/ng-101/package.json:

    {
      "name": "ng-101",
      "version": "1.0.0",
      "description": "an intro to angular-js tutorial",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/jomarquez/ng-101.git"
      },
      "keywords": [
        "ng-101",
        "angular",
        "tutorial"
      ],
      "author": "joanna marquez johnson",
      "license": "ISC",
      "bugs": {
        "url": "https://github.com/jomarquez/ng-101/issues"
      },
      "homepage": "https://github.com/jomarquez/ng-101#readme"
    }


    Is this ok? (yes) yes
```

Install gulp
> `npm install gulp --save-dev`

Install browser-sync
> `npm install browser-sync --save-dev`

Create gulpfile and create watch task to spin up server and automatically refresh browser on save
> `touch gulpfile.js`

```
    ### gulpfile.js ###
    var gulp = require('gulp');
    var browserSync = require('browser-sync').create();

    gulp.task('watch', ['browserSync'], function (){
      // Reloads the browser whenever HTML or JS files change
      gulp.watch('src/client/app/**/*.html', browserSync.reload);
      gulp.watch('src/client/app/**/*.js', browserSync.reload);
    });

    gulp.task('browserSync', function() {
      browserSync.init({
        server: {
          baseDir: 'src/client'
        },
      })
    })
```

Start the server
> `gulp watch`
