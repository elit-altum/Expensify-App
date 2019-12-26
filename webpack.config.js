const path = require('path');

//Plugin to extract particular extension files as seperate files in webpack
//Here we use it for CSS/SCSS
const ExtractTestPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';

  //Constructor accepts the name and extension of new file to be created
  const CSSExtract = new ExtractTestPlugin('styles.css');
  return {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        //For every scss/css file run CSSExtract for extraction
        use: CSSExtract.extract({
          use: [  //Let CSSExtract use these loaders and also allow loaders to map to source(original file)
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            }
          ]
        })
      }]
    },
    plugins: [  //Plugins used for bundling
      CSSExtract,
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};
