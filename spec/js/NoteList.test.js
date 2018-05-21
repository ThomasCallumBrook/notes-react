import React from 'react';
import NoteList from 'NoteList';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import sinon from 'sinon';
import toJson from 'enzyme-to-json';

const notes = [
  {id: 1, title: "Note A", content: "What a wonderful React Monday", tags: "learning"},
  {id: 2, title: "Note B", content: "What a wonderful React Tuesday", tags: "learning"},
]
test('NoteList should render as expected', () => {
  const component = shallow(<NoteList notes={notes}/>);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
