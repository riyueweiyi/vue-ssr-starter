const fs = require('fs')
const path = require('path')
const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')

const bundleRenderer = createBundleRenderer(
  // Load the SSR bundle with require.
  require('./dist/vue-ssr-server-bundle.json'),
  {
    runInNewContext: false,
    // Yes, I know, readFileSync is bad practice. It's just shorter to read here.
    template: fs.readFileSync(path.resolve(__dirname, './src/index.template.html'), 'utf-8'),
    clientManifest: require('./dist/vue-ssr-client-manifest.json')
  }
)

// Create the express app.
const app = express()

// Serve static assets from ./dist on the /dist route.
app.use('/dist', express.static('dist'))
app.use('/js', express.static(path.resolve(__dirname, './dist/js')))
app.use('/img', express.static(path.resolve(__dirname, './dist/img')))
app.use('/css', express.static(path.resolve(__dirname, './dist/css')))

// Render all other routes with the bundleRenderer.
app.get('*', (req, res) => {
  const errorHandler = err => {
    if (err && err.code === 404) {
      res.status(404).end('404 | Not Found')
    } else {
      // Render Error Page or Redirect
      res.status(500).end('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err)
    }
  }
  bundleRenderer
    // Renders directly to the response stream.
    // The argument is passed as "context" to main.server.js in the SSR bundle.
    .renderToStream({ url: req.path })
    .on('error', errorHandler)
    .pipe(res)
})

// Bind the app to this port.
app.listen(8081, function () {
  console.log('Server running at http://localhost:8081')
})
