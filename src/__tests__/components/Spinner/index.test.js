import React from "react";
import { render } from "@testing-library/react";

import Spinner from "../../../components/Spinner";

describe("spinner test", () => {
  it("renders App component", () => {
    render(<Spinner />);
  });
});
