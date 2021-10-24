// need to import react so we can use JSX syntax
import React from 'react';

import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

// write the function here

function MyApp() {
    // don't forget it needs return keyword
    return (

      // we can list the HTML inside MyApp or we can add components that will be further defined in a seperate files
      // <ul>
      //   <li>first list item</li>
      //   <li>second list item</li>
      //   <li>third list item</li>
      // </ul>
   
        <div className = "container card mb-3 shadow-lg mt-5">
          <Header />
          <MainContent />
          <Footer />
        </div>
      
      )
  };

  // need to export the component

  export default MyApp