var path = require('path');

module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "public/assets/js/bundle.js",
        sourceMapFilename: "public/assets/js/bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
}
