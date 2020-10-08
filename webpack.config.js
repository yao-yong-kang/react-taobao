const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')

<<<<<<< HEAD

=======
>>>>>>> f6b0acc17566bf83fcca1fb3465ba3f41fc2897e
module.exports = {
    mode: "development",
    entry: "./src/order/order.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: "babel-loader"
            },
            {
<<<<<<< HEAD
                test:/\.css$/,
                use:[
<<<<<<< HEAD
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader:"px2rem-loader",
                        options:{
                            remUni:64,
                            remPrecision:8
=======
                test: /\.css$/,
                use: ["style-loader",
                    "css-loader",
                    {
                        loader: "px2rem-loader",
                        options: {
                            remUni: 64,
                            remPrecision: 8
>>>>>>> 976e39e847c59dda87ef6f2634b15a1c6f341d72
                        }
                    }
=======
                    "style-loader","css-loader",
                    // {
                    //     loader:"px2rem-loader",
                    //     options:{
                    //         remUni:64,
                    //         remPrecision:8
                    //     }
                    // }
>>>>>>> f6b0acc17566bf83fcca1fb3465ba3f41fc2897e
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/order/order.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[contenthash:8].css',
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host: "127.0.0.1",
        port: "8080",
        hot: true,
        open: true,
        contentBase: "./dist"
    }
}

