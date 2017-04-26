const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const fallback = require('express-history-api-fallback');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../webpack.config');
const laps = require('./routes/laps');

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/laps', laps);

const compiler = webpack(config);

app.use(webpackHotMiddleware(compiler));
app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true },
}));

app.use('*', (req, res, next) => {
  const filename = join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) return next(err);

    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

// START THE SERVER
app.listen(3000, () => console.log('Server started on port 3000'));

module.exports = app;
