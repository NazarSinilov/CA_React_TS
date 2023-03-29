import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Message from "./pages/Contact";
import Main from "./pages/Home";
import {CSSTransition} from 'react-transition-group';

function App() {
  const routes = [
    {path: '/', Component: Main},
    {path: '/contact', Component: Message},
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <div className="div">
          <NavLink to='/'>Main</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
        <Routes>
          {routes.map(({path, Component}) =>
            <Route key={path} path={path}>
              {({match}) => {
                return <CSSTransition
                  timeout={1000}
                  classNames='page'
                  unmountOnExit
                  in={match != null}
                >
                  <Component />
                </CSSTransition>
              }
              }
            </Route>
          )}
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
