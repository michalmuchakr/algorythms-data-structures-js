const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        publicPath: "/dist",
        filename: "bundle.js",
    },
    resolve: {
        modules: [path.resolve("./src"), "node_modules"],
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        }, ],
    },
    devServer: {
        compress: true,
        port: 9000,
        hot: true,
    }
};