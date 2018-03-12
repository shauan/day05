const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: [
            path.resolve('./born/js/main.js')
        ]
    },
    resolve: {
        root: [
            path.resolve('./born/js')
        ]
    },
    output: {
        path: path.resolve('./born/static/js'),
        filename: '[name].min.js',
        chunkFilename: '[name].min.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules\/(?!@borngroup)/],
            loaders: ['babel-loader']
        }]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['.'] },
            plugins: ['bs-fullscreen-message']
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].min.js.map',
            exclude: 'vendor.bundle.min.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }
        })
    ]
};
