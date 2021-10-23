import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// functional components
//uper case cammel case for component

function MyApp() {
  return (
    <ul>
      <li>first list item</li>
      <li>second list item</li>
      <li>third list item</li>
    </ul>
    )
};


ReactDOM.render(
  // the element that we want displayed goes here, Needs to be wrapped in one element, needs to be parent and children
  // for example:
  //   <ul>
  //     <li>first list item</li>
  //     <li>second list item</li>
  //     <li>third list item</li>
  //   </ul>

// or instead we can use functional component, that is wrapped in JSX tags, self closing component

  <MyApp />,


  // the place where it will land on the page - the div that will hold it
  document.getElementById('root')
);

