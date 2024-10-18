const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const ProtectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "unauthorized - No Token Provided" });
    }

    try {
      const decoded = jwt.verify(
        token,
        "7089d93a878c8dd6aacacfb84d0e4f24734ed3aadcd7cd08d417958d2c5481a4ce31cf35c04c9180330ece6974d6ea9c1f741433aa714eb1a5acc8cbf260dab0caff7322d6d094f7207da0d0d1626bed34562a990087c63ea4940865735991b3"
      );

      if (!decoded) {
        return res
          .status(401)
          .json({ error: "unauthorized - Ivaild Provided" });
      }

      const user = await User.findById(decoded.userID).select("-password");
      if (!user) {
        res.status(404).json({ error: "User Not found" });
      }
      req.user = user;

      next();
    } catch (error) {
      return res
        .status(401)
        .json({ error: "unauthorized - No Token Provided" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "protectroute.js Internal server error  " + error });
  }
};

module.exports = ProtectRoute;
