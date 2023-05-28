/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {      
        config.module.rules.push({
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next/static/fonts',
                        outputPath: 'static/fonts',
                        name: '[name].[hash].[ext]',
                        esModule: false
                    }
                }
            ]
        });

        return config;
    }
};

module.exports = nextConfig;
