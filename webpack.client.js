const path = require('path');


module.exports = {
    entry:{
        app: './src/index.js'
    },
    output:{
        filename:'[name].js',
        path: path.resolve(__dirname,'build/public'),
    },
    optimization: {
        splitChunks:{
            cacheGroups: {
                node_vendors:{
                    test:/[\\/]node_modules[\\/]/,
                    name:'vendor',
                    chunks: "all"
                }
            }
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:'/node_modules/',
                options:{
                    plugins:["transform-class-properties"],
                    presets:[
                        'react',
                        'stage-0',
                        'env',
                    ]
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    }

}