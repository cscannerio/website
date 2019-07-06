# The cscanner.io website

This is the repository for the website hosted at cscanner.io. It is made public for the
community to learn from it.

## License

Copyright &copy; Janos Pasztor. All rights reserved.

## Technologies

This website is built with [mkdocs](https://www.mkdocs.org/), [grunt](https://gruntjs.com/) and
[sass](https://sass-lang.com/).

## Installing dependencies

Dependencies can be installed using the following two commands:

```
npm install
pip install -r requirements.txt
```

## Build process

As such, the build process is integrated in NPM:

```
npm run watch
```

This will start all build processes and watch for changes. The webserver will be available at http://127.0.0.1:8000/
