export async function handler(event, context) {
  const query = event.queryStringParameters;

  // Handle subscription verification
  if (query["hub.challenge"]) {
    return {
      statusCode: 200,
      body: query["hub.challenge"],
    };
  } else if (event.httpMethod === "POST") {
    const body = event.body;
    console.log("Notification received:", body);

    // Update playlist data (runs update lambda function)
    const res = await fetch(
      `https://elimservices.netlify.app/.netlify/functions/setVidListBlob`
    );
    const data = await res.json();

    return {
      statusCode: 200,
      body: "Notification received successfully",
    };
  } else {
    return {
      statusCode: 400,
      body: "Invalid request",
    };
  }
}
