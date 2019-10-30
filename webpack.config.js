const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const thmlplugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})

module.exports = {
    mode: "development",
    plugins: [
        thmlplugin
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(js|jsx)$/,use:'babel-loader',exclude:/node_modules/}
        ]
    }
}