const pkg = require('../package.json')
const { resolve } = require('path')
const r = path => resolve(__dirname, path)

module.exports = {
  port: 8088,
  root: r('../'),
  route: {
    prefix: '/api',
    async before(ctx, next) {
      await next()
    },
    async after(ctx, next) {
      await next()
    }
  },
  auth: {
    expired: 60 * 60 * 24,
    exclude: ['/api/user/login']
  },
  redis: {
    prefix: pkg.name
  },
  saluki2: {
    name: pkg.name,
    version: pkg.version,
    port: 8088,
    urls: 'http://10.42.169.144:8761/eureka/apps,http://10.42.10.250:8761/eureka/apps,http://10.42.140.37:8761/eureka/apps',
    services: {
      // Example:
      // SecurityService: 'com.quancheng.security.service.SecurityService:juno-service:1.0.0',
    }
  }
}
