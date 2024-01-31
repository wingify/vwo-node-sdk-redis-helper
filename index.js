/**
 * Copyright 2024 Wingify Software Pvt. Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const redis = require('redis');

class RedisUserStorageUtil {
  constructor() {
    this.client = null;
  }

   /**
   * This method: Initializes the Redis client with the provided configuration.
   *
   * @param {string} host              The host address of the Redis server
   * @param {number} [port=6379]       The port number of the Redis server (default is 6379)
   * @param {string} [password]        The password for authentication
   *
   * @throws {Error} If there is an error during connection or if the Redis client is already initialized
   */
  async init(config) {
    const { host, password, port = 6379 } = config;

    this.client = redis.createClient({
      host,
      port,
      password
    });

    await this.client.connect();

    // Handle any connection errors
    this.client.on('error', (err) => {
      console.error('Redis Connection Error:', err);
    });
  }

   /**
   * This API method: Gets the variation assigned for the user if stored in Redis UserStorage for the campaign
   *
   * @param {String} userId            ID assigned to a user
   * @param {String} campaignKey       unique campaign key specified in VWO app
   *
   * @return {String|null}             If data is stored then details about variation otherwise null in case of no stored data
   */
  async get(userId, campaignKey) {
    if (this.client) {
      try {
        const key = `${campaignKey}:${userId}`;
        const result = await this.client.get(key);

        if (result === null) {
          return result;
        }

        return JSON.parse(result);
      } catch (error) {
        console.error('Error while getting data from Redis:', error);
        throw error;
      }
    } else {
      throw new Error('Redis client not initialized');
    }
  }
   /**
   * If UserStorageService is provided and variation data was stored, save the assigned data in Redis
   *
   * @param  {Object} properties
   *
   * @throws {Error}  If the Redis client is not initialized or if there is an error while setting data in Redis
   */
  async set(properties) {
    if (this.client) {
      const { campaignKey, userId } = properties;
      const key = `${campaignKey}:${userId}`;
      const stringValue = JSON.stringify(properties);

      try {
        await this.client.set(key, stringValue);
      } catch (error) {
        console.error('Error while setting data in Redis:', error);
        throw error;
      }
    } else {
      throw new Error('Redis client not initialized');
    }
  }
}

module.exports = RedisUserStorageUtil;
