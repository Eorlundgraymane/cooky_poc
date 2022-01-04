exports.get404 = (req, res, next) => {
  res.status(404).render("error/404", { pageTitle: "MVC 404", path: "/404" });
};
