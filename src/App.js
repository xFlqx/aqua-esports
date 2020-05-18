import React from "react";
import { Helmet } from "react-helmet";

import Header from "./containers/header/header";
import About from "./containers/about/about";
import Events from "./containers/events/events";
import Owner from "./component/owner/owner";
import Footer from "./component/footer/footer";

function App() {
  return (
    <div className="App">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Teko:wght@300;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster+Two:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header />
      <About />
      <Events />
      <Owner />
      <Footer />
    </div>
  );
}

export default App;
