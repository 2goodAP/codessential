const path = require('path');

module.exports = {
    entry: {
        app: './src/app/app.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|jpg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'imgs'
                        }
                    }
                ]
            }
        ]
    }
};
