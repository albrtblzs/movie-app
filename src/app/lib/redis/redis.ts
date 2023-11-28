import Redis, { RedisOptions } from 'ioredis';
import config from '@/app/config';

function createRedisInstance(
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

    const redis = new Redis(String(config.redis.url) || '', options);

    redis.on('error', (error: unknown) => {
      console.warn('[Redis] Error connecting', error);
    });

    return redis;
  } catch (e) {
    throw new Error(`[Redis] Could not create a Redis instance`);
  }
}

const redisInstance = createRedisInstance();

export default redisInstance;
