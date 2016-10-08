var React = require('react');
var ThumbnailList = require('./thumbnail-list');

// Options
var options = {
  thumbnailData: [
    {
      title: 'Sent', 
      number: 4,
      header: 'Learn React',
      description: 'A fantastic library to make fast web apps',
      imageUrl: 'https://worldvectorlogo.com/logos/react.svg'
    },
    {
      title: 'Received', 
      number: 2,
      header: 'Learn Angular',
      description: 'A full SPA framework',
      imageUrl: 'http://pucksart.com/wp-content/uploads/2014/10/AngularJS-Shield-large-282x300.png'
    }
  ]
};

// Render the form element
var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.target'));
