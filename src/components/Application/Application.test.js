import React from "react";
import { getByText, render, screen } from "@testing-library/react";

/*
  We import the component that we are testing
*/
import Application from "./Application";

/*
  A test that renders a React Component
*/
it("renders without crashing", () => {
  render(<Application />);
});
