import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the application", () => {
  render(<App />);
  const header = screen.getByText("Space Cats");
  expect(header).toBeInTheDocument();
});

test("renders the correct header text", () => {
  render(<App />);
  const header = screen.getByText("Space Cats");
  expect(header).toBeInTheDocument();
});
