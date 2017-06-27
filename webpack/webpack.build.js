'use strict';

const nodeExternals = require('webpack-node-externals');

const webpackCommon = require('./webpack.common');
const webpackUtils = require('./webpack.utils');

module.exports = webpackCommon('build', {
    devtool: 'source-map',
    entry: webpackUtils.rootPath('build', 'index.ts'),
    externals: [nodeExternals()],
    module: {
        rules: webpackUtils.buildRules()
    },
    output: {
        filename: 'angular-librarian-test.bundle.js',
        path: webpackUtils.rootPath('dist'),
        libraryTarget: 'umd',
        library: 'angular-librarian-test'
    }
});
