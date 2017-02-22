## Accelerator Solution 

This is an accelerator for Angular 1.x applications.

This package already includes the following libraries

* Angular 1.x (Latest)
* Angular Animate
* Angular Touch
* Angular UI Bootstrap (With Templates)
* Angular Smart Table
* Angular Sanitize
* Angular Toast

All code is modular and jQuery free.

Gulp is already setup to watch src folders and compile + minify the js & css.

index.html points to distribution folder files after gulp has run.

To have your environment ready to code just clone this repository, run "npm i" and then "gulp" in the console.

To add a feature to the application follow the following steps.

1. Create a folder with the feature name in the ./src folder
2. Add a *feature*.module.js that registers the feature as an Angular application and inject to it the app Core.
3. Add a *feature*.routes.js that registers all the associated routes for the feature
4. Add a *feature*.html for markup
5. Add a *feature*.js that will act as the Angular controller for that particular view

Make sure to follow the same pattern as seen for Home and Layout.

To test the application just run "npm start" from the console to start the http server and open in a browser (localhost:3000)
