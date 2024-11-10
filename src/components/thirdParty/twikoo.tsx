'use client'
import Script from 'next/script'

export default function Twikoo() {
  return (
    <div>
      <div id="tcomment"></div>
      <Script
        src="https://cdn.smartcis.cn/npm/twikoo@1.6.39/dist/twikoo.nocss.js"
        onReady={() => {
          window.twikoo.init({
            envId: 'https://twikoo.ciraos.top',
            el: '#tcomment',
            lang: 'zh-CN',
            pageSize: 10,
            includeReply: false,
            urls: [
              'posts/blogOn1Panel.mdx',
              'posts/CPrimerPlus-Chapter03.html',
              'posts/helloworld.html',
              'posts/markdownTest.html',
              'posts/mdx.html',
              'posts/sexual_skills.html',
              'posts/tagPlugins.html',
              'posts/vscode-CPP-Runtime.html',
            ],
          })
        }}
      />
    </div>
  )
}
