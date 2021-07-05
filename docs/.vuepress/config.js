const themeConfigLocalesSettings = {
  selectText: '选择编程语言',
  editLinkText: '在 GitHub 上编辑此页',
  serviceWorker: {
    updatePopup: {
      message: "伙计，我们发现了新内容可用！",
      buttonText: "刷新页面"
    }
  }
}

module.exports = {
  title: '程序员需要知道的房产信息',
  description: '程序员需要知道的房产信息，使用 VuePress 展示',
  base: '/what-you-need-know-about-house/',
  themeConfig: {
    sidebar: [
      {
        title: '开始吧',
        children: [
          '',
        ]
      },
      {
        title: '知识储备',
        children: [
          '/1-knowledge/1.1.0',
          '/1-knowledge/1.1.1',
          '/1-knowledge/1.1.2',
          '/1-knowledge/1.1.3',
          '/1-knowledge/1.1.4',
          '/1-knowledge/1.1.5',
          '/1-knowledge/1.1.6',
          '/1-knowledge/1.1.7',
          '/1-knowledge/1.1.8',
          '/1-knowledge/1.1.9'
        ]
      },
      {
        title: '购房',
        children: [
          '/2-buy-house/2.1.0',
          '/2-buy-house/2.1.1',
          '/2-buy-house/2.1.2',
          '/2-buy-house/2.1.3',
          '/2-buy-house/2.1.4',
          '/2-buy-house/2.1.5',
          '/2-buy-house/2.1.6',
          '/2-buy-house/2.1.7',
          '/2-buy-house/2.1.8',
          '/2-buy-house/2.1.9'
        ]
      },
      {
        title: '房贷那些事儿',
        children: [
          '/3-house-loan/3.1.1',
          '/3-house-loan/3.1.2',
          '/3-house-loan/3.1.3',
          '/3-house-loan/3.1.4',
          '/3-house-loan/3.1.5',
          '/3-house-loan/3.1.6',
          '/3-house-loan/3.1.7'
        ]
      },
      {
        title: '交房之后',
        children: [
          '/4-after-handing-over-house/4.1.0',
          '/4-after-handing-over-house/4.1.1',
          '/4-after-handing-over-house/4.1.2',
          '/4-after-handing-over-house/4.1.3',
          '/4-after-handing-over-house/4.1.4',
          '/4-after-handing-over-house/4.1.5',
        ]
      },
      {
        title: '装修新房',
        children: [
          '/5-before-renovation/5.1.1',
          '/6-renovation/6.1.1',
          '/6-renovation/6.1.1.1',
          '/6-renovation/6.1.1.2',
          '/6-renovation/6.1.1.3',
          '/6-renovation/6.1.2',
          '/6-renovation/6.1.3',
          '/6-renovation/6.2.1',
          '/6-renovation/6.2.2',
          '/6-renovation/6.2.3',
          '/6-renovation/6.2.4',
          '/6-renovation/6.2.5'
        ]
      },
      {
        title: '附录',
        children: [
          '/7-extra/其它参考',
          '/7-extra/房地产数据查询',
          '/7-extra/2.2.1',
          '/7-extra/2.2.2',
          '/7-extra/2.2.3',
          '/7-extra/2.2.4'
        ]
      },
    ],
    repo: 'LolipopJ/what-you-need-know-about-house',
    docsDir: 'docs',
    smoothScroll: false,
    editLinks: true,
    editLinkText: '帮助改善此页面！',
    lastUpdated: '上次更新：'
  },
  markdown: {
    lineNumbers: true
  }
}
