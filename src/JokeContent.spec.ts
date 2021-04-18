import JokeContent from './JokeContent.svelte';
import {render, waitFor} from '@testing-library/svelte';

test('renders spinner', () => {
  const jokeText$ = Promise.resolve('');
  const results = render(JokeContent, {props: {jokeText$}});

  expect(results.getByRole('status')).toHaveTextContent('Loading...');
});

test('renders result', async () => {
  const jokeText$ = Promise.resolve('My Joke!');

  const results = render(JokeContent, {props: {jokeText$}});

  await waitFor(() =>
    expect(results.getByRole('status')).toHaveTextContent('Did you know? My Joke!')
  );
});

test('renders error', async () => {
  const jokeText$ = Promise.reject('I AM ERROR');

  const results = render(JokeContent, {props: {jokeText$}});

  await waitFor(() =>
    expect(results.getByRole('status')).toHaveTextContent('Unable to fetch joke: I AM ERROR')
  );
});
