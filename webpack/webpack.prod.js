const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.js');

const env=require("../config/prod.env")
module.exports=merge(common,{
    mode:"production",
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        })
    ]
})