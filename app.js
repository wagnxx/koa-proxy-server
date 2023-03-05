const Koa = require('koa');
const path = require('path');
const app = new Koa();
const serve = require('koa-static');
// const serve = require('views-static');
const proxy = require('koa2-proxy-middleware')

const history = require('connect-history-api-fallback');
const middleHistory = () => {
  const middleware = history({
    index: '/edit/index.html'
  });
  return async (ctx, next)=> {
    middleware(ctx, null, () => {});
    await next();
  };
};

const options = {
  targets: {
    '/api/(.*)': {
      target: 'http://127.0.0.1:9000',
      pathRewrite: {
        '^/api': ''
      }
    },
  }
}

app.use(middleHistory());

app.use(proxy(options));

// static就是存在前端打包好后的文件夹
// app.use(serve(path.join(__dirname, '/static'), { extensions: ['html'] }));
app.use(serve(path.join(__dirname, '/dist'), { extensions: ['html'] }));

app.listen(3000, () => {
  console.log('server is running, port is 3000');
}); 