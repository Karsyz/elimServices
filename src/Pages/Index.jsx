import { useState, useEffect } from "react";
import ytContent from "../Data/Content";

const Index = () => {
  const [links, setLinks] = useState(ytContent);
  // content.sort((a, b) => a.date - b.date)

  const [currentVid, setCurrentVid] = useState(
    `https://www.youtube.com/embed/${links[0]?.id?.videoId}?si=yZ4Vp14zKTVIpxV0`
  );
 
  // fetch video list data from yt (this should be used by site server once per week or so to avoid excessive yt api usage)
  // const handleFetchData = async () => {
  //   const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&maxResults=50&order=date&publishedAfter=2023-01-01T00:00:00Z&type=video`);
  //   const data = await res.json();
  //   console.log(data.items);
  //   setLinks(data.items)
  // };

  // const handleFetchData = async () => {
  //   const res = await fetch(`localhost:8888/hello`);
  //   const data = await res.json();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   handleFetchData();
  // }, []);

  // useEffect(() => {
    // console.log(links)
    //  console.log(`https://www.youtube.com/embed/${links[0]?.id?.videoId}?si=yZ4Vp14zKTVIpxV0`)
  // }, [links]);



  const handleCurrentVid = (vid, index) => {
    setCurrentVid(
      `https://www.youtube.com/embed/${vid}?si=yZ4Vp14zKTVIpxV0`
    );
   handleSelected(index);
  }

  const handleSelected = (index) => {
    // console.log(index)
    setLinks(
      links.map((el, ind) => {
        if (ind === index) {
          return { ...el, selected: true };
        } else {
          return { ...el, selected: false };
        }
      })
    );
  };

  return (
    <div
      className="flex flex-col items-center w-full bg-gradient-to-b from-[#FAF0E5] to-[#D2B48C] h-screen"
    >
      <img
        src="/images/elimHeader.png"
        alt=""
        className="w-full max-w-[1000px]"
      />
      <h1 className="font-bold text-3xl pt-2 sm:pb-4 sm:px-0 sm:bg-[#FCF8F1] w-full text-center max-w-[1000px]">
        Sunday Services
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-initial w-full sm:bg-[#FCF8F1] sm:px-10 max-w-[1000px] overflow-hidden py-3">
        {/* media player */}
        <div className="w-full px-2 sm:px-0 flex-1">
          <iframe
            className="w-full aspect-16/9 rounded-lg sm:rounded-xl sm:px-0"
            src={currentVid}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* recordings list */}
        <ul className="flex flex-col items-center sm:items-start overflow-y-scroll gap-2 px-2 flex-initial">
          {links.map((el, ind) => {
            return (
              <li
                key={ind}
                className="cursor-pointer font-semibold whitespace-nowrap pr-4 text-2xl sm:text-lg p-4 rounded-md hover:!bg-[#a2dbc2] w-full"
                onClick={() => handleCurrentVid(el?.id?.videoId, ind)}
                style={{
                  background: el.selected ? "#8CD2B4" : "#8CAAD2",
                }}
              >
                {new Date(el?.snippet?.publishedAt).toString().slice(4,15)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Index;
