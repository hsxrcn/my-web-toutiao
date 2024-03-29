
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // publicPath: '/',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'my-app-toutiao',
      dll: false,

      // routes: {
      //   path: '/',
      //   component: '../layouts/index',
      //   router: [
      //     { path: '/DashBoard',component:'./DashBoard/index.js'},
      //   ]
      // },
    }],
  ],
}
