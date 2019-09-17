import React from "react";
import Display from "./Display";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    render(<Display />);
  });
  it("open and unlocked", () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    getByText(/Unlocked/);
    getByText(/Open/);
  });
  it("closed and locked", () => {
    const { getByText } = render(<Display closed={true} locked={true} />);
    getByText(/Locked/);
    getByText(/Closed/);
  });
  it("displays Closed if the closed prop is true and Open if otherwise", () => {
    let { getByText } = render(<Display locked={false} closed={true} />);
    getByText(/Closed/);
  });
  it("displays Closed if the closed prop is true and Open if otherwise", () => {
    let { getByText } = render(<Display locked={false} closed={false} />);
    getByText(/Open/);
  });
  it("displays Locked if the locked prop is true and Unlocked if otherwise", () => {
    let { getByText } = render(<Display locked={true} closed={true} />);
    getByText(/Locked/);
  });
  it("displays Locked if the locked prop is true and Unlocked if otherwise", () => {
    let { getByText } = render(<Display locked={false} closed={true} />);
    getByText(/Unlocked/);
  });
  it("when locked or closed use the red-led class", () => {
    const { getByText } = render(<Display locked={true} closed={true} />);
    const closed = getByText(/Closed/);
    const locked = getByText(/Locked/);
    expect(closed.classList.contains('red-led')).toBeTruthy();
    expect(locked.classList.contains('red-led')).toBeTruthy();
  });
  it("when unlocked or open use the green-led class", () => {
    const { getByText } = render(<Display locked={false} closed={false} />);
    const unlocked = getByText(/Unlocked/);
    const open = getByText(/Open/);
    expect(unlocked.classList.contains('green-led')).toBeTruthy();
    expect(open.classList.contains('green-led')).toBeTruthy();
  });
}); 