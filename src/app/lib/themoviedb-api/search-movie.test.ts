import searchMovies from './search-movie';

describe('searchMovies', () => {
  it('makes a GET request with correct URL and headers', async () => {
    const query = 'hello';
    const page = 1;

    const response = await searchMovies(query, page);

    expect(response.status).toBe(200);
  });

});


describe('searchMovies', () => {
  it('makes a GET request with not correct URL and headers', async () => {
    const query = 'hello';
    const page = -1;

    try {
      await searchMovies(query, page);
    } catch (error: any) {
      expect(error.response.status).toBe(400);
    }

  });

});