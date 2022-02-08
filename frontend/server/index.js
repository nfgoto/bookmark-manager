const path = require("path");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const SERVER_PORT = process.env.SERVER_PORT ?? 4000;
const app = express();

app.use(
  helmet({
    // for development purposes (in prod: set specific directives)
    contentSecurityPolicy: false,
  })
);
app.use(morgan("short"));
app.use(express.json());

// health check
app.get("/health", (req, res) => {
  res.send("OK");
});

app.use("/", express.static(path.join(__dirname, "..", "build")));

app.use((err, req, res, next) => {
  const errorPage = `
  <div style="display:flex; flex-direction: column; justify-content: center; text-align: center;">
    <div>
      <p>An error occurred:</p>
      <p>=============</p>
      <p>${err?.message}</p>
      <p>=============</p>
      <p>please try reloading the page</p>
    </div>
  </div>`;
  res.send(errorPage);
});

const frontServer = app.listen(SERVER_PORT, () => {
  console.log(`Frontend server listening on port ${SERVER_PORT}`);
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

// shut down server
function shutdown() {
  // NOTE: server.close is for express based apps
  frontServer.close(function onServerClosed(err) {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
    process.exit();
  });
}
