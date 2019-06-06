import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Welcome from './pages/Welcome';
import About from './pages/About';
import MapRoute from './pages/MapRoute';
import SetRoute from './pages/SetRoute';

import GlobalStyles from './elements/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/setroute" component={SetRoute} />
          <Route path="/maproute" component={MapRoute} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
