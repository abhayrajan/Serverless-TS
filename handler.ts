import { APIGatewayEvent, Context, Handler } from "aws-lambda";
import "source-map-support/register";

export const hello: Handler = async (
  event: APIGatewayEvent,
  _context: Context
) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello serverless ts champ!",
      },
      null,
      2
    ),
  };
};
