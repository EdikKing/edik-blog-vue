// 自定义容器(custom containers) 提示 警告 错误
import containers from './containers'
// 代码高亮
import highlight from './highlight'
// 代码高亮行
import highlightLines from './highlightLines'
// github表情
import emoji from 'markdown-it-emoji'
// 生成锚点
import anchor from 'markdown-it-anchor'
// 生成目录
import toc from 'markdown-it-table-of-contents'

import _slugify from './slugify'

const slugify = _slugify

const md = require('markdown-it')({
  html: true,
  highlight
}).use(containers)
  .use(highlightLines)
  .use(emoji)
  .use(anchor, {
    slugify,
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: '#'
  })
  .use(toc, {
    slugify,
    includeLevel: [2, 3]
  })

export default md
