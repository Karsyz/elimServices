import {
  useEffect,
  useCallback,
  useState,
} from "react";

const Index = () => {
  const links = [
    {
      date: "June 2 2024",
      href: "RszaZptVa8k",
    },
    {
      date: "May 26 2024",
      href: "0xiPTnPBhHs",
    },
    {
      date: "May 12 2024",
      href: "h5mtiT_LRMY",
    },
    {
      date: "March 17 2024",
      href: "dbUXvnltsdI",
    },
    {
      date: "March 10 2024",
      href: "YDibStbznVg",
    },
    {
      date: "March 3rd 2024",
      href: "DvOpjEprSuM",
    },
    {
      date: "February 25 2024",
      href: "0OPQixLW6TY",
    },
    {
      date: "February 18 2024",
      href: "VfwJvnoKtwM",
    },
    {
      date: "February 11 2024",
      href: "JSp06fu2c",
    },
    {
      date: "February 4 2024",
      href: "ucPiiWFnBCg",
    },
    {
      date: "January 28 2024",
      href: "I_XgePD2J7w",
    },
    {
      date: "January 21st 2024",
      href: "igdVt9t89iQ",
    },
    {
      date: "January 14 2023",
      href: "gB2z6GOs3A4",
    },
    {
      date: "January 7 2023",
      href: "0r-E2zpo7QI",
    },
    {
      date: "Dec 31st 2023",
      href: "vC_0XOAmFHw",
    },
    {
      date: "Dec 24 2023",
      href: "qlUgZQCN1uA",
    },
    {
      date: "December 17 2023",
      href: "kazAS1LhfyY",
    },
    {
      date: "Dec 10 2023",
      href: "NRWzTZ-_OP0",
    },
    {
      date: "Nov 26 2023",
      href: "bhvDfpvf_Ro",
    },
    {
      date: "Nov 19 2023",
      href: "I8vhKdM3cMI",
    },
    {
      date: "Nov 12 2023",
      href: "CjYPIJOW6sY",
    },
    {
      date: "Nov 5 2023",
      href: "s5GhfuE7ZZo",
    },
    {
      date: "Oct 29 2023",
      href: "HBvlxf1uAnw",
    },
    {
      date: "Oct 22nd 2023",
      href: "Cig00CXRlfs",
    },
    {
      date: "October 15 2023",
      href: "SIiqD-nzwxo",
    },
    {
      date: "October 8 2023",
      href: "GI0qT-MBzmQ",
    },
    {
      date: "Oct. 1st 2023",
      href: "Y5cFjCowDlg",
    },
    {
      date: "Sept 24 2023",
      href: "fztNFLVkvgE",
    },
    {
      date: "September 17 2023",
      href: "FvKIYtpwy_s",
    },
    {
      date: "August 27 2023",
      href: "L3eJqVSkpUE",
    },
    {
      date: "August 20 2023",
      href: "DhTk_a8moWA",
    },
    {
      date: "August 13 2023",
      href: "mHMgykitN40",
    },
    {
      date: "Aug 6 2023",
      href: "stlrWkkphQs",
    },
    {
      date: "July 23rd 2023",
      href: "5aKn6r71rT0",
    },
    {
      date: "July 16 2023",
      href: "UXej5RM6iS4",
    },
    {
      date: "July 9 2023",
      href: "0qHKJ8jIXds",
    },
    {
      date: "July 2nd 2023",
      href: "DxUw7U3luDQ",
    },
    {
      date: "June 25 2023",
      href: "zYRYgofXbGA",
    },
    {
      date: "June 18 2023",
      href: "Ok3nP2ZqHsI",
    },
    {
      date: "June 11 2023",
      href: "A-u2AfIDPj8",
    },
    {
      date: "June 4 2023",
      href: "WKTRJRCT7dQ",
    },
    {
      date: "May 28 2023",
      href: "1XSRdaQL7D0",
    },
    {
      date: "May 21st 2023",
      href: "it8CHZd8jxE",
    },
    {
      date: "May 14 2023",
      href: "Y7pPVHRaBm0",
    },
    {
      date: "April 30 2023",
      href: "HnZyAmb1_bA",
    },
    {
      date: "April 23 2023",
      href: "ZO4hFrOc3M4",
    },
    {
      date: "April 16 2023",
      href: "zr6rkdYIV60",
    },
    {
      date: "Easter 2023",
      href: "4jNkyyztlbM",
    },
    {
      date: "Good Friday 2023",
      href: "RiCJ1_CX4M0",
    },
    {
      date: "April 2nd 2023",
      href: "nCFgXzo0MQg",
    },
    {
      date: "March 26 2023",
      href: "k_5j5V-JQz8",
    },
    {
      date: "March 19 2023",
      href: "8UlBF_HdAVk",
    },
    {
      date: "March 5 2023",
      href: "CLDPTfiIt-E",
    },
    {
      date: "February 26 2023",
      href: "UDohyES54pM",
    },
    {
      date: "February 19 2023",
      href: "Q5PMAuNonV0",
    },
    {
      date: "February 12 2023",
      href: "L4JKGYQEzN4",
    },
    {
      date: "February 5 2023",
      href: "dWdEhF_HOX0",
    },
    {
      date: "January 29 2023",
      href: "3sa4bZ7S6pI",
    },
    {
      date: "Jan 22nd 2023",
      href: "teQs5IaCSE8",
    },
    {
      date: "Jan 15 2023",
      href: "Ebs-CAwXL78",
    },
  ];

  const [currentVid, setCurrentVid] = useState(
    `https://www.youtube.com/embed/${links[0].href}?si=yZ4Vp14zKTVIpxV0`
  );
  const [height, setHeight] = useState({});
  const [listHeight, setListHeight] = useState({});
  const [screenWidth, setScreenWidth] = useState(0);

  // screen width observer
  const screenWidthRef = useCallback((nodeA) => {
    if (!nodeA) return;
    const resizeObserver = new ResizeObserver(() => {
      setScreenWidth(nodeA.clientWidth);
    });
    resizeObserver.observe(nodeA);
  }, []);

  // player width observer
  const targetRef = useCallback((node) => {
    if (!node) return;
    const resizeObserver = new ResizeObserver(() => {
      const styleHeightProp = {
        height: String(Math.round(node.clientWidth * 0.5625)) + "px",
      };
      setHeight(styleHeightProp);
    });
    resizeObserver.observe(node);
  }, []);

  // sets list height on small pagewidth breakpoint of 640px
  useEffect(()=>{
    if (screenWidth >= 640) {
      setListHeight(height);
    } else {
      setListHeight({});
    }
  },[screenWidth])

  // fetch video list data from yt (this should be used by site server once per week or so to avoid excessive api usage)
  // const handleFetchData = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  //   const data = await res.json();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   handleFetchData();
  // }, []);

  return (
    <div
      className="flex flex-col items-center w-full bg-gradient-to-b from-[#FAF0E5] to-[#D2B48C] min-h-screen"
      ref={screenWidthRef}
    >
      <div className="max-w-[1000px]">
        <img src="/images/elimHeader.png" alt="" className="w-full" />

        {/* main container */}
        <div className="sm:bg-[#FCF8F1] p-2 sm:p-10 ">
        <h1 className="font-bold text-3xl mb-4">Sunday Services</h1>
          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-10 sm:justify-center w-full"
            // style={height}
          >
            {/* media player */}
            <div className="w-full" ref={targetRef}>
              <iframe
                className="w-full"
                style={height}
                src={currentVid}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* recordings list */}
            <div className="flex flex-col items-center sm:items-start">
              <ul style={listHeight} className="sm:overflow-y-scroll h-full">
                <h3 className="font-bold text-3xl sm:text-xl mb-1">Dates</h3>
                {links.map((el, ind) => {
                  return (
                    <li
                      key={ind}
                      className="cursor-pointer font-semibold whitespace-nowrap pr-4 text-2xl sm:text-lg"
                      onClick={() =>
                        setCurrentVid(
                          `https://www.youtube.com/embed/${el.href}?si=yZ4Vp14zKTVIpxV0`
                        )
                      }
                    >
                      {el.date}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
