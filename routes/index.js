/*
  Place routes with:
    -> a pattern
    -> and a referral to the name of the file under Next.js' pages folder
    -> might be separated into different files later
*/

module.exports = function getRoutes({ server, app }) {
    server.get('/', (req, res) => {
      return app.render(req, res, '/index');
    });
    server.get('/iletisim', (req, res) => {
      return app.render(req, res, '/iletisim');
    });
    server.get('/markalar', (req, res) => {
      return app.render(req, res, '/markalar');
    });
    server.get('/marka-detay', (req, res) => {
      return app.render(req, res, '/marka-detay');
    });
    server.get('/hakkimizda', (req, res) => {
      return app.render(req, res, '/hakkimizda');
    });
    server.get('/yonetim-kadrosu', (req, res) => {
      return app.render(req, res, '/yonetim-kadrosu');
    });
    server.get('/belgelerimiz', (req, res) => {
      return app.render(req, res, '/belgelerimiz');
    });
    server.get('/haberler-videolar', (req, res) => {
      return app.render(req, res, '/haberler-videolar');
    });
    server.get('/haber-detay', (req, res) => {
      return app.render(req, res, '/haber-detay');
    });
    server.get('/kariyer', (req, res) => {
      return app.render(req, res, '/kariyer');
    });
    server.get('/satis-noktalari', (req, res) => {
      return app.render(req, res, '/satis-noktalari');
    });
    server.get('/urun-detay', (req, res) => {
      let url = req.url;
      let errorCode = "";
      return app.render(req, res, '/urun-detay', url);
    });
    
  
    server.get("/*", (req, res) => {
      res.status(404);
      app.render(req, res, `/error-page`, {  errorCode: "404" });
    });
  };
  