module.exports = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: [ 'ng-annotate-loader', 'babel-loader']
        },
        {
            test: /\.html$/,
            loaders: [ 'html-loader' ]
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']
        },
        {
            test: /\.(json)$/, use: ['json-loader']
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
        },
        {
            test: /\.ts(x?)$/,
            use: ['babel-loader', 'ts-loader?configFile=tsconfig.webpack.json'],

        },
        {
            test: /\.glsl$/,
            loaders: ['webpack-glsl-loader']
        }
    ]
};