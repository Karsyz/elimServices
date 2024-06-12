import { connectLambda, getStore } from "@netlify/blobs";

const { API_KEY, PLAYLIST_ID } = process.env;

export async function handler(event, context) {
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&order=date&publishedAfter=2023-01-01T00:00:00Z&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;

  const playlistRes = await fetch(url);
  const ytContent = await playlistRes.json();

  connectLambda(event);

  const vidList = getStore("vidList");
  await vidList.set("videos", JSON.stringify(ytContent));

  return {
    statusCode: 200,
    body: "Playlist successfully updated",
    date: new Date().toISOString(),
  };
}
