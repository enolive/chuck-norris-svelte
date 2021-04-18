import {fetchRandomJoke} from './api';
const aJokeResponse = (jokeText = ''): string =>
  // language=JSON
  `{
    "categories": [
      "dev"
    ],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "0gno3wclrfohs9a_mlx7rw",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/0gno3wclrfohs9a_mlx7rw",
    "value": "${jokeText}"
  }`;

describe('fetches facts from API', () => {
  test('uses expected url', () => {
    fetchMock.mockResponseOnce(aJokeResponse());

    void fetchRandomJoke();

    expect(fetchMock).toHaveBeenCalledWith('https://api.chucknorris.io/jokes/random?category=dev');
  });

  test('resolves joke text', async () => {
    const jokeText = 'No one has ever spoken during review of Chuck Norris\' code and lived to tell about it.';
    fetchMock.mockResponseOnce(aJokeResponse(jokeText));

    const result$ = fetchRandomJoke();

    await expect(result$).resolves.toEqual(jokeText);
  });

  test('rejects fetch errors', async () => {
    fetchMock.mockResponseOnce('', {status: 404, statusText: 'I AM ERROR'});

    const result$ = fetchRandomJoke();

    await expect(result$).rejects.toEqual('I AM ERROR');
  });
});
