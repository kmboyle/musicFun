const { authJwt } = require("../middleware");
const controller = require("../controllers/music.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/songs", [authJwt.verifyToken], controller.getSongs);
  app.get("/api/songs/:trackID", [authJwt.verifyToken], controller.getSong);
  app.post("/api/songs", [authJwt.verifyToken], controller.postSong);
  app.delete("/api/songs/:trackID", [authJwt.verifyToken], controller.deleteSong)
};