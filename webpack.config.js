const path = require('path');

module.exports = {
    mode: 'development',
    entry: './ts/index.ts',
    output: {
        path: path.join(__dirname, "public/dist2"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }]
            }
        ]
    },
    target: ["web", "es5"],
    resolve: {
        modules: [
            "node_modules",
        ],
        extensions: [
            '.ts',
            '.js'
        ]
    }
};