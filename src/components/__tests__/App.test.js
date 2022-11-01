import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

it('shows a comment box', () => {
    /*const div = document.createElement('div');
    
    ReactDOM.render(<App />, div);
    
    // Looks inside the div
    // and checks to see if the CommentBox is in there

    // expect(div.innerHTML).toBeTruthy(); --> verify if the the expression is true or false
    expect(div.innerHTML).toContain('Comment Box');
    
    ReactDOM.unmountComponentAtNode(div);*/
    const wraapped = shallow(<App />);
    expect(wraapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    const wraapped = shallow(<App />);
    expect(wraapped.find(CommentList).length).toEqual(1);
});