import React from 'react';
import {Switch , Route} from "react-router-dom"

//!layout
import LandingPageLayout from "./layouts/landingpage/index"
//!pages
import HomePage from "./pages/Homepage/index"

function App() {
  return (
    <Switch>
    <Route path="/">
    <LandingPageLayout heading="999dice scripts">
      <HomePage/>
    </LandingPageLayout>
    </Route>
    </Switch>
  );
}

export default App;
