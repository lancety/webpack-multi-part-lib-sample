const path = require('path');


module.exports = {
    typescript: {
        test: /^(?!.*\.spec\.ts$).*\.tsx?$/,
        use:
            [
                {
                    loader: 'ts-loader'
                }
            ],
        exclude:
            /node_modules/
    },
    es6: {
        test: /\.(js|jsx)?$/,         // Match both .js and .jsx files
        exclude: [/node_modules/, /StyleGuide\/(?!(src)\/).*/,],
        loader: require.resolve('babel-loader'),
		    options: {
			      presets: ['@babel/preset-react'],
			      plugins: ['@babel/plugin-proposal-class-properties'],
		    }
    },
    esLint: {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: require.resolve('react-dev-utils/eslintFormatter'),
              eslintPath: require.resolve('eslint'),

            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        exclude: [/node_modules/,],
    } ,
};
