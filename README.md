# react-cli-2(master branch)
> [create-react-app@2.x.x](https://facebook.github.io/create-react-app/)  
> CRA@2.x.x 默认支持css或scss module，.module.scss或者.module.css的样式文件，支持样式文件切分  

## Branch list
> 1、[master](https://github.com/jekorx/react-cli-2/tree/master)，主分支，默认分支，基础使用  

## Tech Stack
> 1、[axios](https://github.com/axios/axios)，基于Promise的HTTP客户端，用于浏览器和node.js  
> 2、[mobx](https://cn.mobx.js.org)，状态管理  
> 3、[mobx-react](https://github.com/mobxjs/mobx-react)，包含React组件包装器的包，用于将React与MobX相结合  
> 4、[prop-types](https://github.com/facebook/prop-types)，props变量类型检测  
> 5、[qs](https://github.com/ljharb/qs)，查询字符串解析和字符串化库，增加了一些安全性  
> 6、[react](https://reactjs.org)  
> 7、[react-router](https://github.com/ReactTraining/react-router#packages)，react-router-dom自动引入react-router  
> 8、[react-loadable](https://github.com/jamiebuilds/react-loadable)，以组件为中心的代码分割和懒加载  
> 9、[react-app-rewired](https://github.com/timarney/react-app-rewired)，不使用eject，修改项目配置  
> 10、[customize-cra](https://github.com/arackaf/customize-cra)，用于自定义利用react-app-rewired核心功能的Create React App v2配置  
> 11、[react-hot-loader](https://github.com/gaearon/react-hot-loader)，热更新，开发时使用  

## Directory Structure
```bash
├─ .editorconfig # 编辑器配置
├─ .env.production # 自定义生产环境的环境变量
├─ .env.development # 自定义开发环境的环境变量
├─ .eslintignore # 校验忽略
├─ .eslintrc # 校验配置
├─ .gitattributes # git属性
├─ .gitignore # git提交忽略
├─ config-overrides.js # react-app-rewired配置文件
├─ README.md
├─ package.json
├─ yarn.lock
├─ public # 静态资源
│    └─ index.html # 默认html模版
├─ build # 打包后目录
└─ src # 源代码
     ├─ api # 请求api
     │    └─ index.js # axios相关配置
     ├─ assets # 相关资源
     │    ├─ images # 资源图片
     │    └─ styles # 样式
     ├─ components # 自定义组件
     ├─ routes # 路由
     │    └─ index.js # 路由相关配置
     ├─ store # mobx
     │    └─ index.js # 整合
     ├─ layouts # 布局相关
     ├─ pages # 相关页面
     ├─ App.jsx # 根页面
     └─ index.js # 入口文件
```
