var React = require('react');
var Dropdown = require('./dropdown');

// Options
var options = {
  title: 'Choose a dessert',
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

// Render the form element
var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.target'));
