import "reflect-metadata";
import Express, { Application } from "express";
import { setupServer } from "./server";
import { SERVER_PORT } from "./utils/constants";
import { dao } from "./data/appDao";

(async () => {
  const app: Application = Express();

  setupServer(app);

  const connection = await dao.connect();

  const server = app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
  });

  // quit on ctrl-c when running docker in terminal
  process.on("SIGINT", function onSigint() {
    console.info(
      "Got SIGINT (aka ctrl-c in docker). Graceful shutdown ",
      new Date().toISOString()
    );
    shutdown();
  });

  // quit properly on docker stop
  process.on("SIGTERM", function onSigterm() {
    console.info(
      "Got SIGTERM (docker container stop). Graceful shutdown ",
      new Date().toISOString()
    );
    shutdown();
  });

  /**
   * shut down server gracefully
   */
  async function shutdown() {
    await connection.close();

    // NOTE: server.close is for express based apps
    server.close(function onServerClosed(err) {
      if (err) {
        console.error(err);
        process.exitCode = 1;
      }
      process.exit();
    });
  }
})().catch(console.error);
