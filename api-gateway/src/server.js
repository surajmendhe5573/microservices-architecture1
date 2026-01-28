import './config/env.js';
import app from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚪 API Gateway running on http://localhost:${PORT} (${process.env.NODE_ENV})`
  );
});
