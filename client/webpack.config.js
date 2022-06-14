const webpack = require('webpack');
const path = require('path');

const config = {
    entry: [
        'react-hot-loader/patch',
        './client/index.js'
    ],
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        devMiddleware: {
            index: true,
            mimeTypes: { phtml: 'text/html' },
            serverSideRender: true,
            writeToDisk: true,
        },
    }
};

module.exports = config;
