import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
import { expect, it } from '@jest/globals';
import {create} from 'react-test-renderer';
// snapshot test
// describe(`Snap shot test of APP`, () => {

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/github/i);
    expect(linkElement).toBeInTheDocument();
  });


  it(`It should match the snapshot every time it's rendered`, () => {
    const instance = create(<App/>).toJSON(); // returns an object representing the rendered TREE!
    expect(instance).toMatchSnapshot(); 
    // i don't have an initial picture of the tree (component tree)
    // it will create a snapshot for the firsttime if it doesn't already exist
    // every subseuqnt time we we refer to the snapshot it will use that snapshot as reference!
  })
// });
