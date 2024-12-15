import { after, before, beforeEach, describe, it } from "node:test";
import { prisma } from "@/lib/prisma.ts";
import request from "supertest";
import assert from "node:assert";
import helper from "@/test/testHelper.ts";
import { stopServer, startServer } from "@/server/index.ts";
import { NOT_FOUND } from "@/errors/index.ts";

describe("server", () => {
  let url: string;

  before(async () => {
    ({ url } = await startServer(0));
  });

  it("returns empty array when there are no securities stored in db", async () => {
    await helper.resetDatabase();

    const { body } = await request(url)
      .post("/")
      .send({ query: helper.GET_SECURITIES })
      .expect("Content-Type", /application\/json/);

    assert.strictEqual(body.errors, undefined);
    assert.deepStrictEqual(body.data.securities, []);
  });

  describe("when there are securities stored in db", () => {
    beforeEach(async () => {
      await helper.resetDatabase();
      await prisma.security.createMany({ data: helper.initialSecurities });
    });

    it("returns all securities", async () => {
      const securitiesInDb = await helper.getSecuritiesInDb();

      const { body } = await request(url)
        .post("/")
        .send({ query: helper.GET_SECURITIES })
        .expect("Content-Type", /application\/json/);

      assert.strictEqual(body.errors, undefined);
      assert.deepStrictEqual(body.data.securities, securitiesInDb);
    });

    describe("viewing a specific security", () => {
      it("returns if security exists", async () => {
        const [securityInDB] = await helper.getSecuritiesInDb();

        const { body } = await request(url)
          .post("/")
          .send({ query: helper.GET_SECURITY, variables: { ticker: securityInDB.ticker } })
          .expect("Content-Type", /application\/json/);

        assert.strictEqual(body.errors, undefined);
        assert.deepStrictEqual(body.data.security, securityInDB);
      });

      it("fails with the appropriate error code if security does not exist", async () => {
        const nonExistentTicker = helper.getNonExistentTicker();

        const { body } = await request(url)
          .post("/")
          .send({ query: helper.GET_SECURITY, variables: { ticker: nonExistentTicker } })
          .expect("Content-Type", /application\/json/);

        assert.notStrictEqual(body.errors, undefined);
        assert.strictEqual(body.errors[0].extensions.code, NOT_FOUND);
      });
    });
  });

  after(async () => {
    await prisma.$disconnect();
    await stopServer();
  });
});
