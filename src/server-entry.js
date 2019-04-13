import { app, store, router } from './main.js'

// 服务器端渲染执行
export default context => {
  console.log('server entry running')
  return new Promise((resolve, reject) => {
    router.push(context.url)
    router.onReady(() => {
      const matchComponents = router.getMatchedComponents()
      if (!matchComponents.length) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject({
          code: 404
        })
      }
      Promise.all(matchComponents.map(Component => {
        if (Component.preFetch) {
          return Component.preFetch({
            store,
            router
          })
        }
      })).then(_ => {
        context.state = store.state
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}
