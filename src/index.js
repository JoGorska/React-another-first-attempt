import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./css/bootstrap.css"
import "./css/bootstrap-grid.css"
import "./css/bootstrap-reboot.css"
import "./css/bootstrap-utilities.css"


// import component from a seperate file, doesn't need *.js expension, because js is default
import MyApp from "./components/MyApp.js"


ReactDOM.render(<MyApp />, document.getElementById('root'));

//first parameter

  // the element that we want displayed goes here, Needs to be wrapped in one element, needs to be parent and children
  // for example:
  //   <ul>
  //     <li>first list item</li>
  //     <li>second list item</li>
  //     <li>third list item</li>
  //   </ul>

// or instead we can use functional component, that is wrapped in JSX tags, self closing

// second parameter

// document.getElementById('root')
  // the place where it will land on the page - the div that will hold it, traditional to give it id of "root"

