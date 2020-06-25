import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import withRoot from "./styles/global";
import Container from "./components/Container";
import Header from "./components/Header";
import SideBar from "./components/SiderBar";
import Content from "./components/Content";

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Pokedex</title>
      </Helmet>
      <Container>
        <Header />
        <SideBar />
        <Content />
      </Container>
    </HelmetProvider>
  );
};

export default withRoot(App);
