import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import * as serviceWorker from './serviceWorker';

import About from './Routes/About/About';
import Home from './Routes/Home/Home';
import NotFound from './Routes/NotFound/NotFound';
import Search from './Routes/Search/Search';

import DragDropFileRoute from './Routes/Drag-Drop-File/Drag-Drop-File-Route';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search/:id" 
               component={(props: any) => <Search id={props.match.params.id} /> }>
        </Route>
        <Route path="/file-control">
          <About />
        </Route>
        <Route path="/file-drag-drop-control">
          <DragDropFileRoute />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
