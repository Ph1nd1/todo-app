const { VueLoaderPlugin } = require("vue-loader");
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const DataHub = require('macaca-datahub');
const datahubMiddleware = require('datahub-proxy-middleware');

const datahubConfig = {
  port: 5678,
  hostname: '127.0.0.1',
  store: path.join(__dirname, 'data'),
  proxy: {
    '/api': {
      hub: 'sample'
    }
  },
  showBoard: true,
};

const defaultDatahub = new DataHub({
  port: datahubConfig.port
});

module.exports = {
  entry: {
    main: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      { 
        test: /\.css$/, 
        use: [
            'vue-style-loader', 
            'css-loader'
        ]
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
        template: './public/index.html',
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
  devServer: {
    before: app => {
      datahubMiddleware(app)(datahubConfig);
    },
    after: () => {
      defaultDatahub.startServer(datahubConfig).then(() => {
        console.log('datahub ready');
      });
    },
  },
};