**Note: This is a WIP. The readme below is aspirational, guiding me in what I
want to do -- but it doesn't work yet!**

Responsive data tables -- tables of information that are still readable even at
small screen widths -- can be tricky. There are
[a lot of solutions out there](#techniques). This one picks an option that is
mobile-first, does not require JS, allows for multiple "levels" of data, and is
presented in a readable list form at small screen widths. Like so:

{image TK}

One drawback to this solution, though, is that it relies on column headers being
inserted into the HTML as data attributes, which is a pain if you have a lot of
rows of information to present. You also have to manually change things like
`colspan` based on the number of columns, and `scope` and CSS formatting (like
`text-align`) based on the type of data in each cell.

This tool consumes raw data files, runs them through the responsive tables
template, and gives you HTML and CSS you can drop in place. It automatically
adjusts the code to fit your columns and data formatting requirements.

# Features

* Prepare the data you want to display in structured data files, without having
to worry about the necessary HTML code.

* Generate semantic and accessibility-focused HTML output, without any need for
JavaScript.

* Tables are perfectly readable even if CSS never loads, and progressively
enhanced for modern browsers while being fully compatible with old ones.

* Mobile-first tables, unlike some responsive solutions out there.

* Styling is done through Sass files, with variables that you can easily update
to change things like breakpoints, colors, and spacing.

* Within the table, text can be formatted differently than numbers.

* CSS can optionally be included directly in the resulting HTML file -- so you
can drop it in all together, for instance in hosted solutions or CMSes where you
don't have control over the site-wide CSS files.

# Requirements

Runs on Node; optionally Yarn. Uses Handlebars and Sass, but these will install
for you and you don't necessarily need to know how to use them in order to
process data and do some basic formatting of it.

# Details

## Installation

`npm install` or `yarn install`

## Usage

1. Fork, or clone locally.

2. Take a look at [`config.yaml`](config.yaml) and the sample data in
[`data/sample.yaml`](data/sample.yaml). Run `npm start` or `yarn start` to see
how the HTML for this is generated (at `dist/sample.html`).

3. Modify config.yaml to suit your needs. Options include whether to create a
single HTML file of all your data, or one HTML file for each data file, and
whether to generate a separate CSS file or drop the CSS styles into each HTML
file. Here you can also change some basic aspects of how your tables are
displayed, like colors and spacing, and at what width you want the
mobile-to-desktop breakpoint to occur.

4. Place YAML data files in `data`, formatted as in the sample data file. If
you're not familiar with YAML, there are
[lots](https://blog.stackpath.com/yaml/) of
[guides](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)
and [many implementations](https://yaml.org/). While JSON is probably better for
data generally, YAML is easier to format and read, and there are [JSON-YAML
converters](https://www.json2yaml.com/) you can use.

5. Run `npm start` or `yarn start` to generate the HTML and CSS.

6. For further styling customization, edit the Sass files in the
[`styles`](styles) directory.

## Directory structure

[`config.yaml`](config.yaml), at the root directory, allows you to set
generation options.

[`data`](data) is where you put all of the raw data you're going to be
formatting. A sample file is included.

[`templates`](templates) contains the Handlebars template files that will format
your data. Generally you shouldn't need to edit these.

[`styles`](styles) contains the Sass partials that control the styling of your
data tables. Feel free to crack these open if you want to fully customize the
CSS styling of your display.

[`dist`](dist) is where the HTML and CSS files will be created.

# Known issues

**I have data in key:value pairs like this and want to turn it into a table:**

```
Name: Alice
City: Adelaide
Name: Bob
City: Baltimore
```

I hear you. Unfortunately, I had to choose between this format and lists of
lists (grouping together headers). The latter proved to be more flexible when it
came to defining properties of headings, rows and cells -- for instance
identifying subheadings, setting things like `colspan`, and formatting different
data types like numbers.

The key:value format also requires repeating heading (column) names, which can
be problematic for those entering data by hand.

There are
[several](https://stackoverflow.com/questions/55974692/how-to-convert-key-value-list-into-array-of-objects)
different
[ways](https://stackoverflow.com/questions/63937416/how-to-convert-key-value-list-into-array)
to
[convert](https://www.samanthaming.com/tidbits/90-object-from-entries/) these
types of lists.

# Resources

## Techniques

* [Responsive tables, mobile first and no JS](https://codepen.io/shellbryson/post/responsive-tables),
Shell Bryson (the technique used in this system)

* [Responsive Data Table Roundup](https://css-tricks.com/responsive-data-table-roundup/),
CSS-Tricks (Chris Coyier) — also see
[the full archive of related articles](https://css-tricks.com/tag/responsive-tables/)

* [Picking a Responsive Tables Solution](https://cloudfour.com/thinks/picking-responsive-tables-solution/),
CloudFour (Jason Grigsby)

* [A Responsive Accessible Table](https://adrianroselli.com/2017/11/a-responsive-accessible-table.html),
Adrian Roselli

* [Under-Engineered Responsive Tables](https://adrianroselli.com/2020/11/under-engineered-responsive-tables.html),
Adrian Roselli

## Guides

* [Web Typography: Designing Tables to be Read, Not Looked At](https://alistapart.com/article/web-typography-tables/),
A List Apart (Richard Rutter)

* [How to design complex (and responsive!) tables and not lose your mind](https://medium.com/firefly-design/how-to-design-complex-and-responsive-tables-and-not-lose-your-mind-15d8e1cc67a),
Rachel Anderson

* [WAI's guide on accessible tables](https://www.w3.org/WAI/tutorials/tables/),
W3C

* [Creating Accessible Tables](https://webaim.org/techniques/tables/data),
WebAIM

* [Tables, CSS Display Properties, and ARIA](https://adrianroselli.com/2018/02/tables-css-display-properties-and-aria.html),
Adrian Roselli

# License

Work copyright Ivan Boothe, 2021. Licensed under GPLv3; see [LICENSE](LICENSE).

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
