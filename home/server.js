const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const path = require('path')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './' })
const handle = app.getRequestHandler()

// Load the docs application as a separate Next.js instance
const docsDir = path.join(__dirname, 'docs')
const docsApp = next({ dev, dir: docsDir })
const docsHandle = docsApp.getRequestHandler()

app.prepare().then(() => {
  docsApp.prepare().then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      if (pathname.startsWith('/docs')) {
        docsHandle(req, res, parsedUrl)
      } else {
        handle(req, res, parsedUrl)
      }
    }).listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
})
