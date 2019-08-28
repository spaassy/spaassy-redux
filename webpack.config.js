const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const dev_env = process.env.NODE_ENV == 'dev';

const srcPath = path.resolve(__dirname, '../../')

module.exports = {
    entry: ['./src/index.jsx'],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'spaassy-redux.js',
        library: "spaassy-redux",
        libraryTarget: "umd"
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