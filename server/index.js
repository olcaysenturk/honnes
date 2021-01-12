const express = require('express');
const next = require('next');
const path = require('path');
const getRoutes = require('../routes');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/_next/*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    handle(req, res);
  });

  // redirect asset requests to Next.js
  server.get('/static/*', (req, res, nextFn) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (/\.(png|jpg|svg|css|js|eot|ttf|woff|woff2)(\/)?$/.test(req.url)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
      res.setHeader('Expires', new Date(Date.now() + 31536000000).toUTCString());
    }
    handle(req, res, nextFn);
  });

  server.use(express.json());



  /**
   * Redirection for xss attacks
   * /...<%2fscript><script%20>alert(document.location)<%2fscript>efg1
   * to
   * /...alert(document.location)efg1
   */
  server.use((req, res, nextFn) => {
    // eslint-disable-next-line no-useless-escape
    // const regexForXss = RegExp(/\<.*?\>/gm);
    const regexForXss = RegExp(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|script|&laquo;|&gt;/gm);
    let newUrl = req.url;
    if (regexForXss.test(newUrl)) {
      newUrl = newUrl.replace(regexForXss, '');
      res.redirect(301, decodeURIComponent(newUrl));
    } else {
      nextFn();
    }
  });

  /**
   * Redirect all URL's don't have trailing slashes to the trailing slashed version(except query string)
   */
  server.use((req, res, nextFn) => {
    const method = req.method.toLowerCase();

    // Skip when the request is neither a GET or HEAD.
    if (!(method === 'get' || method === 'head')) {
      nextFn();
      return;
    }

    /**
     * Disable redirection for URL's having extension
     */
    if (path.extname(req.path)) {
      nextFn();
      return;
    }

    const query = req.url.slice(req.path.length);
    if (req.path.length > 1 && req.path.substr(-1) !== '/') {
      res.redirect(301, query ? `${req.path}/${decodeURIComponent(query)}` : `${req.path}/`);
    } else {
      nextFn();
    }
  });

  if (!dev) {
    server.set('trust proxy', 1); // sets req.hostname, req.ip
  }

  server.get('/robots.txt', (_, res) => {
    res.sendFile(
      path.join(__dirname, '../static', process.env.CONFIG_ENV === 'beta' ? 'robots-beta.txt' : 'robots.txt'),
    );
  });

  /**
   * Compress favicon requests.
   */
  server.get('/favicon.ico', (req, res) => res.send(null));

  getRoutes({ server, app });

  server.listen(3000, (err) => {
    if (err) {
      throw err;
    }
    console.log(`> Application initialized on: aaaa`);
  });
});
