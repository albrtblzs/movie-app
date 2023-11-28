const config = {
  tmdbAPI: {
    url: process.env.TMDB_API_URL || 'https://api.themoviedb.org/3',
    apiKey: process.env.TMDB_API_KEY
  },
  redis: {
    url: process.env.REDIS_URL || 'rediss://default:54809d4a437f48bb913c617cfde98572@eu2-set-koala-31762.upstash.io:31762',
  }
}

export default config
