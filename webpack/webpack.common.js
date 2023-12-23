const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Плагин для копирования файлов
const Dotenv = require('dotenv-webpack'); // Подключение переменных окружения
module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@components': path.resolve(__dirname, '..', 'src/components/'), // Алиас для компонентов
            '@images': path.resolve(__dirname, '..', 'src/images/'), // Алиас для изображений
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html'),
        }),
        new CopyWebpackPlugin({ // Плагин для копирования файлов
            patterns: [
                {
                    from: path.resolve(__dirname, '..', 'public'), // Путь к исходной директории
                    to: path.resolve(__dirname, '..', 'build'), // Путь, куда будут копироваться файлы
                },
            ],
        }),
        new Dotenv(), // Загрузка переменных окружения
    ],
};
