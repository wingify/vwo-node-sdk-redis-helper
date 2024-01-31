## VWO Node SDK Redis Helper

[![npm version](https://badge.fury.io/js/vwo-node-sdk-redis-helper.svg)](https://www.npmjs.com/package/vwo-node-sdk-redis-helper)

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)
![](http://img.badgesize.io/wingify/vwo-node-sdk-redis-helper/master/dist/vwo-javascript-sdk.min.js?compression=gzip&color=blue)

This open source library allows you to use Redis as a UserStorage Service in VWO Node SDK

### Requirements

- Node 6.10.0 or later - for server-side
- Redis 4.6 or later

### Installation

```bash
# via npm
npm install vwo-node-sdk-redis-helper --save

# via yarn
yarn add vwo-node-sdk-redis-helper
```

### How to use

1. Require the helper

    ```javascript
    const VWOUserStorageRedisHelper = require('vwo-node-sdk-redis-helper');
    ```

2. Create the instance

    ```javascript
    const VWORedisStorageInstance = new VWOUserStorageRedisHelper();
    ```

3. Initialize the helper with the Redis configuration

    ```javascript
    VWORedisStorageInstance.init({
      // URL to connect with Redis
      url: 'http://localhost',
      // password to connect to Redis, if any
      password: "test@123",
      // (Optional) port where redis is listening, by default 6379
      port: 1234
    });
    ```

### Documentation

Refer [Official VWO Documentation](https://developers.vwo.com/docs/fullstack-overview)

### Authors

* [Saksham Gupta](https://github.com/sakshamg1304)

### Changelog

Refer [CHANGELOG.md](https://github.com/wingify/vwo-node-sdk-redis-helper/blob/master/CHANGELOG.md)

### Contributing

Please go through our [contributing guidelines](https://github.com/wingify/vwo-node-sdk-redis-helper/blob/master/CONTRIBUTING.md)

### Code of Conduct

[Code of Conduct](https://github.com/wingify/vwo-node-sdk-redis-helper/blob/master/CODE_OF_CONDUCT.md)

### License

[Apache License, Version 2.0](https://github.com/wingify/vwo-node-sdk-redis-helper/blob/master/LICENSE)

Copyright 2024 Wingify Software Pvt. Ltd.
