import App from './App.svelte';
import {render, waitFor} from '@testing-library/svelte';
import {fetchRandomJoke} from './api';
import {mocked} from 'ts-jest/utils';
jest.mock('./api');

const mockedFetch = mocked(fetchRandomJoke);

beforeEach(() => {
  mockedFetch.mockClear();
});

test('renders correctly', async () => {
  mockedFetch.mockResolvedValueOnce('My awesome joke!');

  const results = render(App);

  expect(results.getByRole('heading')).toHaveTextContent('👊 Chuck Norris App 👊');
  expect(results.getByRole('figure')).toMatchSnapshot();
  expect(results.getByRole('button')).toHaveTextContent('Refresh');
  await waitFor(() =>
    expect(results.getByRole('status')).toHaveTextContent('My awesome joke!')
  );
});
