const app = require("./app");
const logger = require("pino")();
require("dotenv").config();
const { PORT } = process.env;

// LISTEN FUNCTION
app.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});
