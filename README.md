该项目还在持续更新中...，

链接如下：https://github.com/ZhenyuYuan/react-app/tree/dev

## 项目说明

利用create-react-app新建react项目，安装jest和enzyme环境并完成必要配置，参照官网：https://jestjs.io/zh-Hans/

## 踩坑点

1. 百度上搜到的各种帖子和项目耦合程度太强，不建议照搬其配置；
2. jest24+版本不支持babel6，所以需要显式引如babel-jest@23.*.*版本；
3. 对于css文件和其他文件，需要编写其转换文件，参照项目中config/cssTransform.js和config/fileTransform.js文件；
