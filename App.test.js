import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  it("Smoke Test: Renders Empty", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Snapshot Test: Empty", () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
