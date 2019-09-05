const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const dev_env = process.env.NODE_ENV == 'dev';

const srcPath = path.resolve(__dirname, '../../')

module.exports = {
    entry: ['./src/index.js'],
    devtool: 'cheap-module-source-map',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'spaassy-redux.js',
        library: "spaassy-redux",
        libraryTarget: "umd"
    },
    externals: {
        "lodash": {
            commonjs: "lodash",
            commonjs2: "lodash",
            amd: "lodash",
            root: "_"
        },
        "react": {
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            root: "react"
        },
        "react-redux": {
            commonjs: "react-redux",
            commonjs2: "react-redux",
            amd: "react-redux",
            root: "react-redux"
        }
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }]
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    resolve: {
        //配置别名，在项目中可缩减引用路径
        alias: {},
        extensions: ['.jsx', '.js', '.json', '.scss', '.css', '.less']
    }
};