var path = require('path');
var webpack = require('webpack');
var WebpackMd5Hash = require('webpack-md5-hash');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  context: path.join(__dirname, './one'), //声明了我们的根目录
  entry:{
    fastclick:['./fastclick.js'],  //这里打包注意文件的先后顺序，会影响我们执行的顺序
    // app2:["./app1.js"]  //这样可以配置多个入口文件
  },
  // entry:() => new Promise((resolve) => resolve(["./app.js","./app1.js"]) ),
  output:{
    path:path.join(__dirname,'./oneBuild'),
    // filename:'js/[chunkhash].js' //name的值是我们entry的时候设置的名称
    filename:'js/[name].js' //name的值是我们entry的时候设置的名称
  },
  
  resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".json", '.vue']
    },

  module:{
    rules:[
      {
        test:/\.js$/,  //针对所有的js文件,这是配置我们babel转码的模块
        exclude:/node_modules/,   //排除我们node_modules里面的文件
        loader:'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ //独立打包css模块，同时加上我们的contenthash
          fallback:'style-loader',
          use:["css-loader"],
           publicPath:'../'
        })
     },
     {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
     {
        test:/\.(png|gif|jpg)$/,
        loader:'url-loader?limit=8192&name=img/[name].[hash:8].[ext]',
     },
     {
        test:/\.html$/,
        loader:'html-withimg-loader'
     }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({  //压缩js代码
      compress:{
        warnings:false
      },
      output:{
        comments:false
      }
    }),
      new WebpackMd5Hash(),
      //动态生成HTML文件，然后可以设置相关的属性和加载顺序
      new HtmlWebpackPlugin({
        title:"多引入文件",
        filename:"index.html",
        template:path.resolve(__dirname,'./one/one.html'),
        inject:true,
        chunks:["app1","app2"],
        chunksSortMode: function(chunk1,chunk2){
                    var orders = [ 'app1' , 'app2' ];
                    var order1 = orders.indexOf(chunk1.names[0]);
                    var order2 = orders.indexOf(chunk2.names[0]);
                    return order1 - order2;
        },
      }),
     // new UglifyJSPlugin(),//压缩js代码
     new ExtractTextPlugin('css/[name].[contenthash].css'), 
  ]
}
