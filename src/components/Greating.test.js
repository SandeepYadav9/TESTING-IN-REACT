import { render, screen } from "@testing-library/react";
import Greating from "./Greating";

describe("Testing of h3 tag elements", () => {
  // Test Suites
  test('  "Nameste World!"  ', () => {
    // test are method take two arguments 1. text 2. function inside function have 3'a

    render(<Greating />); // Rendring components

    const testNameste = screen.getByText("Nameste World!"); //React-dom screening
    expect(testNameste).toBeInTheDocument(); //
  });
});
