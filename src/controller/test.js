import {
  RouteMap,
  RouteMethods
} from '@quancheng/durandal'

export default class Order {
  @RouteMap('/test', RouteMethods.GET)
  async list(ctx) {
    const reponseText = 'Hello World!'
    ctx.success(reponseText)
  }
}