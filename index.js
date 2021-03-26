'use strict';

const fs         = require('fs');
const yaml       = require('js-yaml');
const Handlebars = require("handlebars");
// const helpers    = require('handlebars-helpers')({
//   handlebars: Handlebars
// });
const path       = require('path');

//
// DEVELOPMENT LOGGING
//

/**
* Register a debug helper for Handlebars to be able to log data or inspect data in the browser console
*
* Usage:
*   {{debug someObj.data}} => logs someObj.data to the console
*   {{debug someObj.data true}} => logs someObj.data to the console and stops at a debugger point
*
* Source: https://gist.github.com/elgervb/5c38c8d70870f92ef6338a291edf88e9
*
* @param {any} the data to log to console
* @param {boolean} whether or not to set a breakpoint to inspect current state in debugger
*/
Handlebars.registerHelper( 'debug', function( data, breakpoint ) {
    console.log(data);
    if (breakpoint === true) {
        debugger;
    }
    return '';
});
// use with {{log 0 this "myString" accountName}}
// DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3,
Handlebars.registerHelper('log', Handlebars.logger.log);
// Std level is 3, when set to 0, handlebars will log all compilation results
Handlebars.logger.level = 3;

//
// Paths
//

const paths = {
  data: path.resolve('./data/', 'sample.yaml'),
  template: path.resolve('./templates/', 'table.hbs'),
  styles: path.resolve('./styles/', '*.scss'),
  dist: path.resolve('./dist/', 'sample.html')
}

//
// Styles
//

// For now we do this quick and dirty, just dumping the Sass file in as CSS.
Handlebars.registerPartial('css', fs.readFileSync(__dirname + '/styles/styles.scss', 'utf8'));

//
// Convert YAML to JSON
//

const dataJSON = yaml.loadAll(fs.readFileSync(paths.data, {encoding: 'utf-8'}));
// Uncomment to write intermediate JSON file to disk.
// fs.writeFileSync('./data/sample.json', JSON.stringify(dataJSON, null, 2));

//
// Handlebar helpers
//

Handlebars.registerHelper('columnCount', function() {
  var columnCount = Object.keys(dataJSON[0]['columns']).length;
  return new Handlebars.SafeString(columnCount);
});

//
// Handlebar compiling
//

const template = fs.readFileSync(paths.template, 'utf8');
const format = Handlebars.compile(template, {
  strict: true
});
const result = format(dataJSON);

fs.writeFileSync(paths.dist, result);
console.log(`File written to ${paths.dist}`);


