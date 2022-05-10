import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
import "intersection-observer";

describe("App", () => {
  it("renders static elements", () => {
    render(<App />);

    expect(screen.getByText(/giphy/i)).toBeInTheDocument();
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });
});
