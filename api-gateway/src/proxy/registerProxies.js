import { createProxyMiddleware } from "http-proxy-middleware";
import { SERVICES } from "../config/services.js";

export function registerProxies(app) {
  Object.entries(SERVICES).forEach(([service, target]) => {
    console.log(`🔀 Proxy registered: /api/v1/${service} → ${target}`);

    app.use(
      `/api/v1/${service}`,
      createProxyMiddleware({
        target,
        changeOrigin: true,

        pathRewrite: (path, req) => {
          return `/api/v1/${service}${path.replace(`/api/v1/${service}`, "")}`;
        },

        logLevel: "debug",

        onProxyReq(proxyReq, req, res) {
          if (req.body && ["POST", "PUT", "PATCH"].includes(req.method)) {
            const bodyData = JSON.stringify(req.body);

            // Set headers
            proxyReq.setHeader("Content-Type", "application/json");
            proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));

            // Write body
            proxyReq.write(bodyData);
          }
        },
      })
    );
  });
}
