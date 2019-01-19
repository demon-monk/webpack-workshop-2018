const CompressWebpackPlugin = require('compression-webpack-plugin')

module.exports = () => ({
    plugins: [
        new CompressWebpackPlugin()
    ]
})