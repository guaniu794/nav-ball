const app = getApp()

Page({
  data: {
    navs: [
      {
        name: '社会',
        src: '/images/bridge.png',
        url: '/pages/other/other',
        type: 'navigateTo'
      },
      {
        name: '主义',
        src: '/images/iceberg.png',
        url: '/pages/other/other',
        type: 'navigateTo'
      },
      {
        name: '核心',
        src: '/images/sea.png',
        url: '/pages/other/other',
        type: 'navigateTo'
      },      
      {
        name: '价值',
        src: '/images/spruce.png',
        url: '/pages/other/other',
        type: 'navigateTo'
      }
    ]
  },
  onLoad() {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})
