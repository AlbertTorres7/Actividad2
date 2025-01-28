
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://alberttorres7.github.io/Actividad2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://alberttorres7.github.io/Actividad2"
  }
],
  assets: {
    'index.csr.html': {size: 23691, hash: '9cddcff6e0e867eb30c1a0b2f3aa04f98a74e20f6360f5dec78ba025c1e2cbef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17240, hash: 'c5d999a699b608311476c80fd2ebbcaae6c04c727393be4dd8b94259df1601a4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 45560, hash: 'c82995dc831119369cba9919bc712cd38203f6186b1aec39354bf7d38b8aadcf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5E32HN6F.css': {size: 7004, hash: 'kvW87oK+vDk', text: () => import('./assets-chunks/styles-5E32HN6F_css.mjs').then(m => m.default)}
  },
};
