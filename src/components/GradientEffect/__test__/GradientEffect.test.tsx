import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import GradientEffect from "../GradientEffect";

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the gradient", () => {
  render(<GradientEffect />);
  expect(true).toBeTruthy();
});
