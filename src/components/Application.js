import React from "react";
import { HelmetProvider, Helmet } from 'react-helmet-async'

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <HelmetProvider>
        <Helmet>
    
<title>Aermo modelling club</title>
<meta name="title" content="Aermo modelling club" />
<meta name="description" content="hey peeps!! Aero modelling club welcomes you all......" />


<meta property="og:type" content="website" />
<meta property="og:url" content="https://og-tester-1.onrender.com/app" />
<meta property="og:title" content="Aermo modelling club" />
<meta property="og:description" content="hey peeps!! Aero modelling club welcomes you all......" />
<meta property="og:image" content="https://www.bing.com/images/search?view=detailV2&ccid=%2bHys0ScU&id=C6B5C18D5E6806989926C713C6952B51821C9822&thid=OIP.-Hys0ScUl1Dgx9yC-cM-bwHaDs&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.f87cacd127149750e0c7dc82f9c33e6f%3frik%3dIpgcglErlcYTxw%26riu%3dhttp%253a%252f%252fwww.machineconcepts.co.uk%252faeromodelling%252fteosawki%252fat_Girton-2.jpg%26ehk%3dBcZmqq7Teo0UFUiWN8rq4mBF2rBz2pxUUC7EMF2ryig%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=501&expw=1005&q=aeromodelling&simid=608030485011644133&FORM=IRPRST&ck=1D88FEC19DAAE12806D51524E31BC903&selectedIndex=2&itb=0" />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://metatags.io/" />
<meta property="twitter:title" content="Aermo modelling club" />
<meta property="twitter:description" content="hey peeps!! Aero modelling club welcomes you all......" />
<meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />


        </Helmet>
        </HelmetProvider>
        {/* Other content of your application */}
      </div>
    );
  }
}

export default Application;
