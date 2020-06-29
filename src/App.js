import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import withRoot from "./styles/global";
import Container from "./components/Container";
import Header from "./components/Header";
import SideBar from "./components/SiderBar";
import Routes from "./routes/index";

const App = () => {
  return (
    <Router>
      <HelmetProvider>
        <Helmet>
          <title>Pokedex</title>
        </Helmet>
        <Container>
          <Header />
          <SideBar />
          <Routes />
        </Container>
      </HelmetProvider>
    </Router>
  );
};

export default withRoot(App);
