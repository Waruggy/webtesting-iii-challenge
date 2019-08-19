import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

 import Display from "./Display.js";

 describe("<Display />", () => {
  it("should use red-led class when locked", () => {
    const { getByText } = render(<Display locked={true} />);

     const lockedDisplay = getByText(/locked/i);

     expect(lockedDisplay).toHaveClass("red-led");

     expect(lockedDisplay).toHaveTextContent(/locked/i);
  });

   it("should use green-led class when unlocked", () => {
    const { getByText } = render(<Display locked={false} />);

     const lockedDisplay = getByText(/unlocked/i);

     expect(lockedDisplay).toHaveClass("green-led");

     expect(lockedDisplay).toHaveTextContent(/unlocked/i);
  });

   it("should use red-led class when closed", () => {
    const { getByText } = render(<Display closed={true} />);

     const closedDisplay = getByText(/closed/i);

     expect(closedDisplay).toHaveClass("red-led");

     expect(closedDisplay).toHaveTextContent(/closed/i);
  });

   it("should use green-led class when open", () => {
    const { getByText } = render(<Display closed={false} />);

     const closedDisplay = getByText(/open/i);

     expect(closedDisplay).toHaveClass("green-led");

     expect(closedDisplay).toHaveTextContent(/open/i);
  });

   it("unmounts component after each test", () => {
    console.log(document.body.outerHTML);
  });
}); 