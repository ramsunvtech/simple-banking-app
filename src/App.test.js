import React from 'react';
import {
  render as rtlRender,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Components Imports.
import App from './App';

// Customize RTL Render
function render(ui,
  {
    locale = 'en',
    ...renderOptions
  } = {}) {
  function Wrapper({ children }) {
    // @tdd-todo: Customize your render method.
    const messages = {};
    return (
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

jest.mock('history');

jest.mock('./AppContext');

describe('App', () => {
  beforeEach(() => {
  });

  afterEach(cleanup);

  test('match Snapshot', () => {
    const { container } = rtlRender(<App location={{}} />);
    expect(container).toMatchSnapshot();
  });
});