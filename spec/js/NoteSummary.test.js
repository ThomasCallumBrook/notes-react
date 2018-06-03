import React from 'react';
import NoteSummary from 'NoteSummary';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import sinon from 'sinon';
import toJson from 'enzyme-to-json';

const currentNote = sinon.spy();
const note = {title: "Note A", content: "What a wonderful React Monday", tags: "learning"}
test('Note Summary should render as expected', () => {
  const component = shallow(<NoteSummary {...note}/>);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
test('Note Summary should respond to a click', () => {
  const currentNote = sinon.spy();
  const component = shallow(<NoteSummary {...note} currentNote={currentNote}/>);
  component.find('.child').simulate('click', {preventDefault() {} });
  expect(currentNote.callCount).toEqual(1);
});
test('Note Summary delete button should respond to a click', () => {
  const currentNote = sinon.spy();
  const component = shallow(<NoteSummary {...note} deleteNote={currentNote}/>);
  component.find('.delete-btn').simulate('click', {preventDefault() {} });
  expect(currentNote.callCount).toEqual(1);
});
