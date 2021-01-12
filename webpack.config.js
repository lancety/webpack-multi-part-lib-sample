var path = require("path");
const rules = require('./webpack.rules.js');

process.env.NODE_ENV = "development";
process.env.BABEL_ENV = 'development';

module.exports = {
	// mode: "development || "production",
	entry: {
		alpha: "./alpha",
		beta: {
			import: "./beta",
			dependOn: ["alpha"],
		}
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "MyLibrary.[name].js",
		sourceMapFilename: '[file].map',
		devtoolModuleFilenameTemplate: '/source/[resource-path]',
		library: ["test", "[name]"],
		libraryTarget: "umd"
	},
	module: {
		rules: [
			rules.typescript,
			rules.esLint,
			rules.es6,
		],
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test(module, chunks) {
						return module.resource &&
							module.resource.includes(`${path.sep}node_modules${path.sep}`) &&
							!module.resource.includes(`${path.sep}cvpbase${path.sep}`)
					},
					chunks: 'all',
					name: 'Vendor',
				}
			}
		}
	},
	mode: "development",
	devtool: "source-map", // devtool will crash IE11 browsers
	resolve: {
		alias: {
			'react': path.resolve(__dirname, 'node_modules/react/index.js'),
			'react-dom': path.resolve(__dirname, 'node_modules/react-dom/index.js'),
		},
		modules: [
			'node_modules'
		],
		extensions: ['.json', '.ts', '.js', '.jsx', '.tsx', '.ts']
	}
};
