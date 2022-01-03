import handler from "./util/handler";
import dynamoDb from "./util/dynamodb";

export const main = handler(async (event) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: "1234",
      noteId: event.pathParameters.id,
    },
  };
  await dynamoDb.delete(params);

  return { status: true };
});
