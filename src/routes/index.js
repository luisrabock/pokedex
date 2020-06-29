import React from "react";
import { Route } from "react-router-dom";
import Content from "../components/Content";
import Details from "../components/Details";

const Routes = () => (
  <>
    <Route exact path="/" component={Content} />
    <Route exact path="/pokemon/:name" component={Details} />
  </>
);

export default Routes;
