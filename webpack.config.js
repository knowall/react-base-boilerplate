const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

const extractHtml = new HtmlWebpackPlugin({
    template: 'public/index.html'
})

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }]
            }
        ]
    },
    plugins: [
        extractHtml
    ]
}