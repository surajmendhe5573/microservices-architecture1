import jwt from "jsonwebtoken";

const authAlumni = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.fail("Unauthorized", 401);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "ALUMNI") {
      return res.fail("Forbidden", 403);
    }

    req.user = decoded;
    next();
  } catch (err) {
    return res.fail("Invalid token", 401);
  }
};

export default authAlumni;
