const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#AB97F3', 
            '@layout-body-background':'linear-gradient(150deg, rgba(245,246,247,1) 30%, rgba(255,236,178,1) 60%)',
            '@layout-header-background':'linear-gradient(79deg, rgba(245,246,247,1) 25%, rgba(255,236,178,1) 65%)',
            '@card-radius':'10px',
            '@menu-item-color':'rgb(0 0 0 / 65%)',
            '@layout-sider-background':'linear-gradient(180deg, rgba(245,246,247,1) 25%, rgba(215,237,252,1) 65%)',
            '@menu-bg':'rgba(245,246,247,1)',
            '@btn-border-radius-base':'10px',
            '@card-background':'#f5f6f7',
            '@layout-trigger-background':'#AB97F3'
          },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};