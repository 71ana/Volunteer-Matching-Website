const path = require('path');

module.exports = {
    // Other webpack configuration options...

    resolve: {
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            path: require.resolve("path-browserify")
        }
    },

    // Other webpack configuration options...

    module: {
        rules: [
            // Your existing rules for JavaScript, React, etc.
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            // Add more rules as needed...
        ],
    },

    // Other webpack configuration options...

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
