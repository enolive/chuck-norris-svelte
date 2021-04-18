interface JokeResponse {
  value: string;
}

const failOnWrongStatusCode = (res: Response): Promise<Response> =>
  res.status === 200
    ? Promise.resolve(res)
    : Promise.reject(res.statusText);

export const fetchRandomJoke = (): Promise<string> =>
  fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(failOnWrongStatusCode)
    .then<JokeResponse>(res => res.json())
    .then(res => res.value);
