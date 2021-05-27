[![](https://img.shields.io/github/stars/kuuga794/nav-ball?style=flat-square)](https://github.com/kuuga794/nav-ball/stargazers)
[![](https://img.shields.io/github/forks/kuuga794/nav-ball?style=flat-square)](https://github.com/kuuga794/nav-ball/network/members)
[![](https://img.shields.io/badge/basicLib->=2.2.3-brightgreen?logo=wechat)](https://github.com/kuuga794/nav-ball)

## 1 演示
[在开发者工具中预览效果](https://developers.weixin.qq.com/s/e7TzxBmx7aqg)=>代码片段ID:`e7TzxBmx7aqg`

![图1-1 截图](https://read-1259514422.cos.ap-hongkong.myqcloud.com/resource/demo.gif)

## 2 安装使用
1. 获取组件
```sh
git clone https://github.com/kuuga794/nav-ball.git
```
将项目中/components/nav-ball文件夹拷贝到组件路径下

2. 引入组件
在使用该组件的页面对应json文件中添加：
```json
{
  "usingComponents": {
    "component-nav-ball": "/components/nav-ball/nav-ball"
  }
}
```

3. 使用组件
```html
<!-- index.wxml -->
<component-nav-ball navs="{{navs}}" />
```
```js
Page({
  data:{
    navs: [{
      name: '社会',
      src: '/images/bridge.png',
      url: '/pages/other/other',
      type: 'navigateTo'
    },
    ...
    ]
  }
}) 
```

```css
/* index.wxss */
page {
	--add-action: #ff5638; /*定义颜色*/
}
```

## 4 属性列表
| 属性 |类型| 默认值|必填|说明|
| -- | --|--|--|--|
| navs | Array | | 是 |导航菜单列表 {name,icon,url,type}|
