export async function handler(event, context) {
  const query = event.queryStringParameters;

  // Handle subscription verification
  if (query["hub.challenge"]) {
    return {
      statusCode: 200,
      body: query["hub.challenge"],
    };
  }

  // Handle notifications
  if (event.httpMethod === "POST") {
    const body = event.body;
    console.log("Notification received:", body);

    // Your logic to handle the new video upload
    // For example, you can parse the XML body and extract relevant information

    return {
      statusCode: 200,
      body: "Notification received successfully",
    };
  }

  return {
    statusCode: 400,
    body: "Invalid request",
  };
}