import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders blog name from props", () => {
  render(<App />);

  // Only match the main blog title (h1)
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toBeInTheDocument();
});
