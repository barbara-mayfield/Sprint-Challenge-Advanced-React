import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactDOM from 'react-dom';
import App from './App';

import PlayerCard from '../src/components/Player/PlayerCard'
import Nav from './components/Nav/Nav'

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

it('renders Name input', () => {
  const wrapper = rtl.render(<PlayerCard />)

  const element = wrapper.getByText(/name/i)
  expect(element).toBeVisible()
})

it('Dark mode switch present in nav', () => {
  const wrapper = rtl.render(<Nav />)

  const element = wrapper.getByTestId('toggle-mode')
  expect(element).toBeVisible()
})