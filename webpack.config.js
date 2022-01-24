const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = () => {
    return {
        // این قسمت در اصل ادرس روت ماژول ها را مینویسیم
        // کگه ورودی همه از این قسمت میباشد
        entry: {
            main: "./src/main.js",
        },
        // اینجا هم ادرس فایلی است که باندل میشود
        output: {
            filename: "index.js",
            path: path.resolve(__dirname, "public"),
        },
        devServer: {
            historyApiFallback: true, // SPA
            // بوسیله دو سرور میتوانید بر روی
            // پورت خاصی گوش کنید
            // port: 3001
        },
        module: {
            rules: [{
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                },
                {
                    test: /\.html$/i,
                    use: ["html-loader"],
                },
                {
                    test: /\.css$/i,
                    use: ["css-loader"],
                },
            ],
        },
        plugins: [
            // new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./public/index.html", // template file
                filename: "index.html", // output file
            }),
            new CopyPlugin({
                patterns: [
                    { from: "assets/css/index.css", to: "index.css" },
                    // { from: "assets/css/index.js", to: "index.js" },
                ],
            }),
        ],
    }
}