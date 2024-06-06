import { useState } from "react";
import content from "../Data/Content";

const Index = () => {
  const [links, setLinks] = useState(content.sort((a, b) => a.date - b.date));
  const [currentVid, setCurrentVid] = useState(
    `https://www.youtube.com/embed/${links[0].href}?si=yZ4Vp14zKTVIpxV0`
  );

  // fetch video list data from yt (this should be used by site server once per week or so to avoid excessive api usage)
  // const handleFetchData = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  //   const data = await res.json();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   handleFetchData();
  // }, []);

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
      id="top"
      className="flex flex-col items-center w-full bg-gradient-to-b from-[#FAF0E5] to-[#D2B48C] h-screen !scroll-smooth"
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
            id="vid"
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
              <a className="w-full" href="#top">
                <li
                  key={ind}
                  className="cursor-pointer font-semibold whitespace-nowrap pr-4 text-2xl sm:text-lg p-4 rounded-md hover:!bg-[#a2dbc2] w-full"
                  onClick={(evt) => {
                    setCurrentVid(
                      `https://www.youtube.com/embed/${el.href}?si=yZ4Vp14zKTVIpxV0`
                    );
                    handleSelected(ind);
                  }}
                  style={{
                    background: el.selected ? "#8CD2B4" : "#8CAAD2",
                  }}
                >
                  {el.date}
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Index;
