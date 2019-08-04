const router = require("express").Router();

router.route("/").get((req, res) => {
  res.json({ sucess: "success" });
});

module.exports = router;
