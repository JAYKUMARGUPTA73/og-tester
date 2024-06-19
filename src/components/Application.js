import React from "react";
import { HelmetProvider, Helmet } from 'react-helmet-async'

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <HelmetProvider>
        <Helmet>
          <meta property="og:title" content="Title Here" />
          <meta property="og:site_name" content="Propertiess" />
          <meta property="og:url" content="https://propertyease.in/contactus" />
          <meta property="og:description" content="Description Here" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.example.com/your-image.jpg"
          />
        </Helmet>
        </HelmetProvider>
        {/* Other content of your application */}
      </div>
    );
  }
}

export default Application;
