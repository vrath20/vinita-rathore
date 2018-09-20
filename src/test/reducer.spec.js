import React from "react";
import { shallow } from "enzyme";
import  List  from "../reducer/UserListReducer";


describe("reducer case", () => {

  let state;

  beforeEach(() => {
    state = [
      {
        id: 4,
        first_name: "Eve",
        last_name: "Holt",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      },
      {
        id: 5,
        first_name: "Charles",
        last_name: "Morris",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      },
      {
        id: 6,
        first_name: "Tracey",
        last_name: "Ramos",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
      }
    ];
  });

  it('should return the initial state', () => {
    const expectedResult = state;

    expect(List(state=expectedResult, {})).toEqual(expectedResult);
  });




})
