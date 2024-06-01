const JWT_SECRET = "ThisIsStrongPass";
var jwt = require("jsonwebtoken");

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
//   if (!token) {
//     res.status(401).send({ error: "Please authenticate using a valid token" });
//   }
// //   try {
//     const data = jwt.verify(token, JWT_SECRET);
//     console.log(data)
//     req.user = data.user;
//     console.log(req.user);
//     next();
// //   } catch (error) {
// //     res.status(401).send({ error: "Please authenticate using a valid token" });
// //   }
if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded)=> {
      if (err) {
        res.status(403).send({ success: false, message: "Failed to authenticate user." })
      } else {
        req.user = decoded
        next()
      }
    })
  } else {
    res.status(403).send({ success: false, message: "No Token Provided." })
  }
};

module.exports = fetchuser;
