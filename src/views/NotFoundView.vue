<template>
  <div class="not-found page-width">
    <p class="eyebrow"><span></span> ERROR 404</p>
    <strong>404</strong>
    <h1>这条路径没有连接到任何节点。</h1>
    <p>页面可能已被移动，或者地址输入有误。</p>
    <RouterLink class="button button--primary" :to="{ name: 'home' }"
      >返回首页 <span>→</span></RouterLink
    >
  </div>
</template>
