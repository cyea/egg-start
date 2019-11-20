module.exports = app => {
  const apiV1Router = app.router.namespace('/v1');
  const { router, controller, config, middleware } = app;
  apiV1Router.get('/', controller.home.index);
  
};
