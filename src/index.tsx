import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import * as serviceWorker from './serviceWorker';

import About from './Routes/About/About';
import NotFound from './Routes/Not-Found/Not-Found-Route';
import Search from './Routes/Search/Search';

import MasterPage from './Routes/--MasterPage/MasterPage';
import MDPageLoader from './Control-Library/Page-Loader/Page-Loader';

import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/Home/Home'))} />
          </MasterPage>
        </Route>
        <Route path="/about">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/About/About'))} />
          </MasterPage>
        </Route>
        <Route path="/file-drag-drop">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/Drag-Drop-File/Drag-Drop-File-Route'))} />
          </MasterPage>
        </Route>
        <Route path="/file-control">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/File-Control/File-Control-Route'))} />
          </MasterPage>
        </Route>
        <Route path="/input">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/Input/Input-Route'))} />
          </MasterPage>
        </Route>
        <Route path="/input-action">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/Input-Action/Input-Action-Route'))} />
          </MasterPage>
        </Route>
        <Route path="/button">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/Button/Button-Route'))} />
          </MasterPage>
        </Route>
        <Route path="/CheckBox">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/Check-Box/Check-Box-Route'))} />
          </MasterPage>
        </Route>
        <Route path="/RadioButton">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/Radio-Button/Radio-Button-Route'))} />
          </MasterPage>
        </Route>
        <Route path="/box">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/Box/Box-Route'))} />
          </MasterPage>
        </Route>
        <Route path="/box2">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/Box/Box-Route2'))} />
          </MasterPage>
        </Route>
        <Route path="/box3">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/Box/Box-Route3'))} />
          </MasterPage>
        </Route>
        <Route path="/drop-down-input">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/Drop-Down-Input/Drop-Down-Input-Route'))} />
          </MasterPage>
        </Route>
        <Route path="/html-editor">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/HTML-Editor/HTM-Editor-Route'))} />
          </MasterPage>
        </Route>
        <Route path="/Client-Side-Grid">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/Client-Side-Grid/Client-Side-Grid-Route'))} />
          </MasterPage>
        </Route>
        <Route path="/Image">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/Image/Image-Route'))} />
          </MasterPage>
        </Route>
        <Route path="*">
          <MasterPage>
            <MDPageLoader Page={React.lazy(() => import('./Routes/Not-Found/Not-Found-Route'))} />
          </MasterPage>
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
