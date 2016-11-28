'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: {
        'index': './example/index.js'
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.common.js'
        }
    },
    output: {
        path: path.resolve('./build'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    babel: {
        presets: ['es2015']
    },
    plugins: ([
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'example/index.html',
            inject: false,
        }),
        new webpack.HotModuleReplacementPlugin()
    ]),
    node: {
        process: false,
        setImmediate: false
    },
    devServer: {
        host: '0.0.0.0',
        port: 8082,
        contentBase: path.resolve('./build'),
        historyApiFallback: true,
        inline: true,
        hot: true,
        stats: {
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }
    },
    debug: true
};

module.exports = config;
