const webpack = require('webpack')
const path = require("path");
module.exports = {
    devServer: {
        hot: true,// Включение Hot Reloading
        static: {
            directory: path.resolve(__dirname, '..', 'public'), // Путь к статическим файлам
        },
    },
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.BASE_URL':
                JSON.stringify('http://localhost:8001')
        }),
        new webpack.HotModuleReplacementPlugin(),// Включение плагина HotModuleReplacementPlugin
    ],

}