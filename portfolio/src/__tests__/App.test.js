import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import App from '../App.js';
import Home from '../components/Home.js';

//snapshot testing
describe('App js tests', () => {
  it('renders without crashing', () => {
    // AAA
    // arrange, actoin, assert
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });



})


// describe('CityInputField', () => {
//   it('calls onChange when text is inputed', () => {
//     const testInput = 'los angeles';

//     const spyOnChange = jest.fn();

//     const component = render(
//       <CityInputField
//         onChange={spyOnChange}
//       />
//     )
//     const input = component.getByLabelText('city-input') // gets dom element with aria-label

//     // action
//     fireEvent.change(input, { target: { value: testInput } })

//     expect(spyOnChange).toHaveBeenCalled();
//     expect(spyOnChange).toHaveBeenCalledWith(testInput);
//   })  
// it('renders without crashing 2', () => {
  //   // arrange + action
  //   const tree = renderer.create
  // })

  // it('renders name when condition it renders', () => {
  //   const component = render(<App condition={'snow'} />)

  //   expect(component.getByText('Nick')).toBeInTheDocument();
  //   // expect(component.getByLabelText('page-header')).hasText('');
  // })
  // it('renders error when wrong condition', () => {
  //   const component = render(<App condition={'NOPE'} />)

  //   expect(component.getByText(/error/i)).toBeInTheDocument();
  // })
// })

