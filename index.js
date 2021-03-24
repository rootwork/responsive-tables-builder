'use strict';

const fs         = require('fs');
const yaml       = require('js-yaml');
const Handlebars = require("handlebars");
// const helpers    = require('handlebars-helpers')({
//   handlebars: Handlebars
// });
const path       = require('path');

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


