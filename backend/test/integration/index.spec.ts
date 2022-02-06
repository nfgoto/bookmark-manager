import { testServer } from "../fixture/server"

describe('bookmark api integration', () => {
  describe("GET /health", () => {
    it('should return OK', () => {
      testServer
        .get('/health')
        .expect('Content-Type', /text/)
        .expect(200)
        .then(response => {
          expect(response.text).toMatch("OK")
        });
    })
  })
})