const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    entry: "./src/index.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },

    devServer: {
        static: "./dist",
        open: true,
        hot: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                type: "javascript/auto",
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};
