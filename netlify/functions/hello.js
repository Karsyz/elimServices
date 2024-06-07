//format is aws lambda

export async function handler(event, context) {
  const data = { hello: "Hello World" };
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
