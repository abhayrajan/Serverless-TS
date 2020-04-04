// import * as mocha from "mocha";
import * as chai from "chai";
// import { APIGatewayEvent, Handler, Context } from "aws-lambda";
import { hello } from "./handler";

const expect = chai.expect;
// const should = chai.should();

describe("handler", () => {
  describe("hello", () => {
    it("should return message", () => {
      hello(null, null, (error: Error, result: any) => {
        expect(error).to.be.null;
        expect(result?.body).not.to.null;
        expect(result.body).to.include("champ");
        // result.body.should.include("champ");
      });
    });
  });
});
