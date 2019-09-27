const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8080
    }
};