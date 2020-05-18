import React from "react";
import { Helmet } from "react-helmet";

import Header from "./containers/header/header";
import About from "./containers/about/about";
import Events from "./containers/events/events";

function App() {
  return (
    <div className="App">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Teko:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <About />
      <Events />
    </div>
  );
}

export default App;
