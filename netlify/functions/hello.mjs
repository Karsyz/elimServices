//format is aws lambda

import { getStore } from "@netlify/blobs";
// import type { context } from "@netlify/functions";

import ytContent from "../../src/Data/Content";

export async function handler(event, context) {
  const construction = getStore("construction");
  await construction.set("nails", "For general carpentry");

  const vidList = getStore("vidList");
  await vidList.set("videos", "zomg it works...");

  return new Response("Nail blobs set for Construction and Beauty stores");

  set("listData", "it works...zomg");

  // const { CHANNEL_ID, API_KEY } = process.env;

  // const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&channelId=${CHANNEL_ID}&maxResults=50&order=date&publishedAfter=2023-01-01T00:00:00Z&type=video`;

  // to get playlist id
  // const playlistIdUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`

  // const playlistRes = fetch(playlistIdUrl);
  // const playlistID = await playlistRes.json();

  // const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistID}&key=${API_KEY}`

  // const uploadsListRes = fetch(url);
  // const uploadsList = await uploadsListRes.json();

  return {
    statusCode: 200,
    body: JSON.stringify(ytContent),
  };
}
