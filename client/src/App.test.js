import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactDOM from 'react-dom';
import App from './App';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Player Stat h1 on nav', () => {
  const wrapper = rtl.render(<App />)

  const element = wrapper.getByText(/Player Stats/i)
  expect(element).toBeVisible()
})