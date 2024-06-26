import { useState, useEffect } from "react";

const Index = () => {
  const [links, setLinks] = useState([]);
  const [currentVid, setCurrentVid] = useState("");

  const handleFetchData = async () => {
    const res = await fetch(`/.netlify/functions/getVids`);
    const data = await res.json();
    const currInd = 0
    handleSelected(data.items, currInd)
    setCurrentVid(
      `https://www.youtube.com/embed/${data.items[currInd]?.snippet?.resourceId?.videoId}?si=yZ4Vp14zKTVIpxV0`
    );
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleCurrentVid = (vid, index) => {
    setCurrentVid(`https://www.youtube.com/embed/${vid}?si=yZ4Vp14zKTVIpxV0`);
    handleSelected(links, index);
  };

  const handleSelected = (data, index) => {
    setLinks(
      data.map((el, ind) => {
        if (ind === index) {
          return { ...el, selected: true };
        } else {
          return { ...el, selected: false };
        }
      })
    );
  };

  return (
    <div className="flex flex-col items-center w-full bg-gradient-to-b from-[#FAF0E5] to-[#D2B48C] h-screen">
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
          {links?.map((el, ind) => {
            return (
              <li
                key={ind}
                className="cursor-pointer sm:text-lg p-4 pr-4 rounded-md hover:!bg-[#a2dbc2] transition-colors duration-200 ease-in-out w-full sm:max-w-[300px]"
                onClick={() =>
                  handleCurrentVid(el?.snippet?.resourceId?.videoId, ind)
                }
                style={{
                  background: el.selected ? "#8CD2B4" : "#8CAAD2",
                }}
              >
                <h4 className="font-bold text-xl">{el.snippet.title}</h4>
                <span className="font-semibold">
                  {new Date(el?.snippet?.publishedAt).toString().slice(4, 15)}
                </span>
                <p className="italic">{el.snippet.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Index;
