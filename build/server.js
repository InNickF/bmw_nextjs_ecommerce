const express = require('express')
const next = require('next')
const compression = require('compression')
const path = require('path')
const cors = require('cors')
const helmet = require('helmet')
const dotenv = require('dotenv')
const cron = require('cron')
const SitemapGenerator = require('advanced-sitemap-generator')

dotenv.config()
const { APP_NAME } = process.env
const router = require(`./common/src/routes/${APP_NAME}`)
/* const logger = require('./common/src/helpers/logger') */

const isDev = process.env.NODE_ENV !== 'production'
const isProd = !isDev

const customHost = process.env.HOST
const host = customHost || null
const prettyHost = customHost || 'localhost'
const port = parseInt(process.env.PORT, 10) || 3000

const app = next({ dev: isDev })


const finalUrl = 'https://bmwshop.autogermana.com.co'
const sitemapPath = path.join(process.cwd(), 'static', 'sitemap.xml')

const renderAndCache = function renderAndCache(
    req,
    res,
    pagePath,
    queryParams
) {
    app
        .renderToHTML(req, res, pagePath, queryParams)
        .then(html => {
            res.send(html)
        })
        .catch(err => {
            app.renderError(err, req, res, pagePath, queryParams)
        })
}


const routerHandler = router.getRequestHandler(
    app,
    ({ req, res, route, query }) => {
        renderAndCache(req, res, route.page, query)
    }
)


const sitemapGeneratorJob = cron.job('0 2 * * 0-6', () => {
    const sitemapGenerator = SitemapGenerator(
        finalUrl,
        {
            stripQuerystring: false,
            ignoreHreflang: true,
            filepath: sitemapPath
        }
    )
    sitemapGenerator.start()
})

app.prepare().then(() => {
    const server = express()

    server.use(compression({ threshold: 0 }))
    server.use(
        cors({
            origin:
                prettyHost.indexOf('http') !== -1 ? prettyHost : `http://${prettyHost}`,
            credentials: true
        })
    )

    server.use(helmet())

    server.get(`/favicon.ico`, (req, res) =>
        app.serveStatic(req, res, path.resolve('./icons/favicon.ico'))
    )

    server.get('/manifest.html', (req, res) =>
        app.serveStatic(req, res, path.resolve('./.next/manifest.html'))
    )

    server.get('/manifest.appcache', (req, res) =>
        app.serveStatic(req, res, path.resolve('./.next/manifest.appcache'))
    )

    server.get('/fonts/slick.woff', (req, res) =>
        app.serveStatic(req, res, path.resolve('./fonts/slick.woff'))
    )

    server.get('/robots.txt', (req, res) => {
        res.header('Content-Type', 'text/plain;charset=UTF-8')
        return app.serveStatic(req, res, path.join(process.cwd(), 'static', 'robots.txt'))
    })

    server.get('/sitemap.xml', (req, res) => {
        res.header('Content-Type', 'application/xml')
        return app.serveStatic(req, res, sitemapPath)
    })

    server.use(routerHandler)

    server.listen(port, host, err => {
        if (err) {
            console.log(err, "error")
        } else
            console.log("ready", prettyHost, ":", port)
    })
})

sitemapGeneratorJob.start()
