**Note: This is a WIP. The readme below is aspirational, guiding me in what I want to do -- but it doesn't work yet!**

Responsive data tables -- tables of information that are still readable even at small screen widths -- can be tricky. There are [a lot of solutions out there](#resources). This one picks an option that is mobile-first, does not require JS, allows for multiple "levels" of data, and is presented in a readable list form at small screen widths. Like so:

{image TK}

One drawback to this solution, though, is that it relies on column headers being inserted into the HTML as data attributes, which is a pain if you have a lot of rows of information to present.

This tool consumes raw data files, runs them through the responsive tables template, and gives you HTML and CSS you can drop in place.

# Features

* Prepare the data you want to display in structured data files, without having to worry about the necessary HTML code.
* Semantic and accessibility-focused HTML output, without any need for JavaScript.
* Tables are perfectly readable even if CSS never loads, and progressively enhanced for modern browsers while being fully compatible with old ones.
* Mobile-first, unlike some responsive solutions out there.
* Styling is done through Sass files, with variables that you can easily update to change things like breakpoints, colors, and spacing.
* CSS can optionally be included directly in the resulting HTML file -- so you can drop it in all together, for instance in hosted solutions or CMSes where you don't have control over the site-wide CSS files.

# Resources

Informed by the following techniques:

* [Responsive tables, mobile first and no JS](https://codepen.io/shellbryson/post/responsive-tables), Shell Bryson (the technique used in this system)
* [Responsive Data Table Roundup](https://css-tricks.com/responsive-data-table-roundup/), CSS-Tricks (Chris Coyier) — also see [the full archive of related articles](https://css-tricks.com/tag/responsive-tables/)
* [Picking a Responsive Tables Solution](https://cloudfour.com/thinks/picking-responsive-tables-solution/), CloudFour (Jason Grigsby)
* [A Responsive Accessible Table](https://adrianroselli.com/2017/11/a-responsive-accessible-table.html), Adrian Roselli
* [Under-Engineered Responsive Tables](https://adrianroselli.com/2020/11/under-engineered-responsive-tables.html), Adrian Roselli

And these important overviews:

* [Web Typography: Designing Tables to be Read, Not Looked At](https://alistapart.com/article/web-typography-tables/), A List Apart (Richard Rutter)
* [How to design complex (and responsive!) tables and not lose your mind](https://medium.com/firefly-design/how-to-design-complex-and-responsive-tables-and-not-lose-your-mind-15d8e1cc67a), Rachel Anderson
* [WAI's guide on accessible tables](https://www.w3.org/WAI/tutorials/tables/), W3C
* [Creating Accessible Tables](https://webaim.org/techniques/tables/data), WebAIM
* [Tables, CSS Display Properties, and ARIA](https://adrianroselli.com/2018/02/tables-css-display-properties-and-aria.html), Adrian Roselli

# License

GPLv3, see [LICENSE](LICENSE).

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
