const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../config/webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

if (isDeveloping) {
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false,
        },
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.use(express.static(path.join(__dirname, '/../public')));
    app.get('/', (req, res) => {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '/../public/index.html')));
        res.end();
    });
} else {
    app.use(express.static(path.join(__dirname, '/../public')));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });
}

app.get('/resume.example.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'resume.example.json'));
});

app.listen(port, (err) => {
    if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
    }
    // eslint-disable-next-line no-console
    console.info(`Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
});
