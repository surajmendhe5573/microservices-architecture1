// import express from "express";
// import cors from "cors";
// import helmet from "helmet";
// import morgan from "morgan";
// import compression from "compression";

// import { registerProxies } from "./proxy/registerProxies.js";
// import notFound from "./middlewares/default/notFound.js";
// import errorHandler from "./middlewares/default/errorHandler.js";
// import { responseFormatter } from "./middlewares/default/responseFormater.js";

// const app = express();

// app.use(helmet());
// app.use(morgan("dev"));
// app.use(cors());
// // app.use(express.json());
// app.use(compression());

// app.use(responseFormatter);

// app.get("/", (req, res) => {
//   res.send("API Gateway is running 🚀");
// });

// registerProxies(app); // 🔥 THIS LINE REPLACES ALL ROUTES

// app.use(notFound);
// app.use(errorHandler);

// export default app;
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";

import { registerProxies } from "./proxy/registerProxies.js";
import notFound from "./middlewares/default/notFound.js";
import errorHandler from "./middlewares/default/errorHandler.js";
import { responseFormatter } from "./middlewares/default/responseFormater.js";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(compression());
app.use(responseFormatter);

// ✅ Do NOT parse JSON for proxy routes
// app.use("/api/v1", express.json());

app.get("/", (req, res) => {
  res.send("API Gateway is running 🚀");
});

registerProxies(app);

app.use(notFound);
app.use(errorHandler);

export default app;
