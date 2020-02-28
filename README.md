## README

This is an example of a typescript app that is compiled down to a single js file for consumption in a browser.

## Technologies used
* typescript
* karma
* jasmine
* rollup (for bundling)


## How to use

`npm install` // installs

`npm run build` // bundles

Output will be created in `dist/bundle.js`

Load `test/index.html` in browser.

All exported classes are available under the namespace specified in
rollup.config.js -> output.name value (MyNamespace here)

## Unit testing

### Prerequisit

Chrome installed on machine

### Running

`./node_modules/karma/bin/karma start`

Runs tests without debugging.
Uses ChromeHeadless (ie, no browser will open).

### Debugging

Step 1
`./node_modules/karma/bin/karma start --no-single-run --browser=Chrome`

Step 2
Click "Debug" button

Step 3
Inspect page, go to sources, open up base/src and find ts files of interest (greeter.spec.ts and greeter.ts).

Step 4
Set breakpoints in browser and refresh page


## Helpful Hints

May wish to install karma and karma-cli globally:

`npm install karma karma-cli -g`

Then you can run using:
`karma start`