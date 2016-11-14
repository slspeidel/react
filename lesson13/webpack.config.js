module.exports = {
    entry: [
        './src/index.jsx'
    ],
    output: {
        filename: './bundle.js'
    },
    devServer: {
        inline:true,
        port: 8008
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};