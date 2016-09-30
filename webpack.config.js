module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'ngContextualHelp.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
}
