const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './app.js'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_module/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, './dist')
    }
};
