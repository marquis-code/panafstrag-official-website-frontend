export default function (ctx) {
  if (ctx.route.fullpath === "/oldpage2/") ctx.redirect(301, "/page2/");
}
