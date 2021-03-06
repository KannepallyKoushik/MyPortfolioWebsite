import React from "react";
import "./App.css";
import { Layout, Header, Drawer, Content, Navigation } from "react-mdl";
import { Link } from "react-router-dom";

import Main from "./components/routes";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              MYPORTFOLIO
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">My Projects</Link>
            <Link to="/contact">Contact Me</Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              MYPORTFOLIO
            </Link>
          }
        >
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">My Projects</Link>
            <Link to="/contact">Contact Me</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
