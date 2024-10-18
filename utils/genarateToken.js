const jwt = require("jsonwebtoken");

const genarateToken = (userID, res) => {
  const token = jwt.sign(
    { userID },
    "7089d93a878c8dd6aacacfb84d0e4f24734ed3aadcd7cd08d417958d2c5481a4ce31cf35c04c9180330ece6974d6ea9c1f741433aa714eb1a5acc8cbf260dab0caff7322d6d094f7207da0d0d1626bed34562a990087c63ea4940865735991b3",
    {
      expiresIn: "15d",
    }
  );
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
};
module.exports = genarateToken;
