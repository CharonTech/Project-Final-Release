const router = require("express").Router();

router.get("/", (res, req) => {
  req.render("tournament/homepage", {title: "Home Page", tournament: ""});
});

module.exports = router;