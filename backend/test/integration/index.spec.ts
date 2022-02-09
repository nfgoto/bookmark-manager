import {
  flickrConsumerUrl,
  flickrPayload,
  flickrProviderName,
} from "../fixture/oembed";
import { testServer } from "../fixture/server";

describe("bookmark api integration", () => {
  describe("GET /health", () => {
    it("should return OK", () => {
      testServer
        .get("/health")
        .expect("Content-Type", /text/)
        .expect(200)
        .then(({ text }) => {
          expect(text).toMatch("OK");
        })
        .catch(console.error);
    });
  });

  describe("POST /v1/link", () => {
    testServer
      .post("/v1/link")
      .set("Content-Type", "application/json charset=utf-8' ")
      .send({ provider: flickrProviderName, consumerUrl: flickrConsumerUrl })
      .expect("Content-Type", /json/)
      .expect(201)
      .then(({ body }) => {
        expect(body).toMatchObject(flickrPayload);
      })
      .catch(console.error);
  });
});
