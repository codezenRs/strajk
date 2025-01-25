const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: [{
                    loader: 'css-loader',
                    options: {
                        exportType: "css-style-sheet",
                    },
                },
                ],
            }
        ]
    }
};