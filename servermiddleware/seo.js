export default (req, res, next) => {
  if (req.path == "/oldpage1") {
    res.redirect(301, "/page1");
    return;
  }

  next();
};
