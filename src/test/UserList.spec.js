import React from "react";
import { shallow } from "enzyme";
import configureStore from 'redux-mock-store';
import  List  from "../components/UserList";


describe("UserList", () => {

  it("renders a div", () => {
    const component = shallow(<List  />);
    const div = component.find("div");
    expect(div.first().text()).toEqual("Loading...");
  });




})
