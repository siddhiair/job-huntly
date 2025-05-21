import React from "react";
import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders hello message", () => {
  render(<App />);
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});
