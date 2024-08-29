//@ts-check

export default {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },

  // See https://github.com/ant-design/pro-components/issues/6525
  // and https://github.com/ant-design/pro-components/issues/4852#issuecomment-1364570216
  transpilePackages: [
    'antd',
    '@ant-design/plots',
    '@ant-design/icons',
    '@ant-design/icons-svg',
    '@ant-design/pro-components',
    '@ant-design/pro-layout',
    '@ant-design/pro-list',
    '@ant-design/pro-descriptions',
    '@ant-design/pro-form',
    '@ant-design/pro-skeleton',
    '@ant-design/pro-field',
    '@ant-design/pro-utils',
    '@ant-design/pro-provider',
    '@ant-design/pro-card',
    '@ant-design/pro-table',
    'rc-pagination',
    'rc-picker',
    'rc-util',
    'rc-tree',
    'rc-tooltip',
    'rc-table',
  ],

  compiler: {
    // For other options, see https://styled-components.com/docs/tooling#babel-plugin
    styledComponents: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    esmExternals: 'loose',
  },
  output: 'standalone',
  distDir: '.next',
};

