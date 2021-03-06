module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'ngContextualHelp.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
}
