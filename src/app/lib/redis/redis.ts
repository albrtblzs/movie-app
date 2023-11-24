import Redis, { RedisOptions } from 'ioredis';
import config from '@/app/config';

type Maybe<T> = T | undefined;

function getRedisConfiguration(): {
  url: Maybe<string>;
} {
  return config.redis;
}

function createRedisInstance(
  config = getRedisConfiguration()
) {
  try {
    const options: RedisOptions = {
      lazyConnect: true,
      showFriendlyErrorStack: true,
      enableAutoPipelining: true,
      maxRetriesPerRequest: 0,
      retryStrategy: (times: number) => {
        if (times > 3) {
          throw new Error(`[Redis] Could not connect after ${times} attempts`);
        }

        return Math.min(times * 200, 1000);
      },
    };

    const redis = new Redis(String(config.url), options);

    redis.on('error', (error: unknown) => {
      console.warn('[Redis] Error connecting', error);
    });

    return redis;
  } catch (e) {
    throw new Error(`[Redis] Could not create a Redis instance`);
  }
}

export default createRedisInstance