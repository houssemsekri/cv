import React, { useEffect, useContext } from "react";

import Home from "./pages/Home";
import "./main.scss";
import Container from "./layouts/Container";
import Header from "./components/Header";
import Main from "./layouts/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import Admin from "./pages/Admin";
import { Data } from "./context/DataContext";
import Loggin from "./pages/Loggin";

function App() {
  const loggin = useContext(Data).loggin;
  return (
    <Router>
      <Header />
      <Container>
        <Main>
          <Switch>
            <Route exact path="/about" exact>
              {" "}
              <About />
            </Route>
            <Route exact path="/skills" exact>
              {" "}
              <Skills />
            </Route>
            <Route exact path="/portfolios" exact>
              {" "}
              <Portfolio />
            </Route>
            <Route exact path="/contact" exact>
              {" "}
              <Contact />
            </Route>
            <Route exact path="/loggin">
              {" "}
              <Loggin />
            </Route>
            <Route exact path="/admin" exact>
              {" "}
              {loggin.isLoggin ? <Admin /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/">
              {" "}
              <Home />
            </Route>
          </Switch>
        </Main>
      </Container>
    </Router>
  );
}

export default App;
