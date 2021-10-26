
import React from 'react';

import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"


class MyApp extends React.Component {
  render() {
    return (
   
      <div className="container card mb-3 shadow-lg mt-5">
        <Header />
        <MainContent />
        <Footer />
      </div>
    
    )
  }

};

  export default MyApp