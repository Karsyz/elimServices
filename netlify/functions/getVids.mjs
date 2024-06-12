import { connectLambda, getStore } from "@netlify/blobs";

export async function handler(event, context) {
  connectLambda(event);
  const vidList = getStore("vidList");
  const vids = await vidList.get("videos");
  return {
    statusCode: 200,
    body: vids,
  };
}
