module.exports = app => {
  const { router, controller, config, middleware } = app;
  router.get('/', controller.home.index);
};
