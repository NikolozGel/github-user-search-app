import moon from "/assets/icon-moon.svg";
import search from "/assets/icon-search.svg";
import oval from "/assets/Oval.svg";
import location from "/assets/icon-location.svg";
import website from "/assets/icon-website.svg";
import twitter from "/assets/icon-twitter.svg";
import company from "/assets/icon-company.svg";
import { useState } from "react";
import sun from "/public/assets/icon-sun.svg";

export default function Search() {
  const [theme, setTheme] = useState<boolean>(true);

  const handeClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <div
      className="pt-[31px] px-[24px] pb-[79px] md:pt-[109px] flex flex-col items-center md:w-[573px]-screen xl:w-[730px]-screen w-screen"
      style={{ backgroundColor: theme ? "#F6F8FF" : "#141D2F" }}
    >
      <header className="mb-4">
        <div className="flex justify-between items-center w-[327px] mb-[35px] md:w-[573px] xl:w-[730px]">
          <h1
            className="text-[#222731] text-[26px]
        font-bold mr-[121px]"
            style={{ color: theme ? "" : "#FFF" }}
          >
            devfinder
          </h1>
          <div className="flex">
            <h3
              className="text-[#4B6A9B] text-[13px] font-bold tracking-[2.5px]"
              style={{ color: theme ? "" : "#FFF" }}
            >
              LIGHT
            </h3>
            {theme ? (
              <img
                src={moon}
                alt="moonImg"
                className="ml-[10px] cursor-pointer"
                onClick={() => {
                  setTheme(false);
                }}
              />
            ) : (
              <img
                src={sun}
                alt="sunImg"
                className="ml-[10px] cursor-pointer"
                onClick={() => {
                  setTheme(true);
                }}
              />
            )}
          </div>
        </div>
        <form>
          <div
            className="h-[60px] md:h-[69px] bg-white rounded-[15px] flex justify-stretch items-center pl-[16px] md:w-[573px] xl:w-[730px]"
            style={{ backgroundColor: theme ? "" : "#1E2A47" }}
          >
            <img
              src={search}
              alt="searchImg"
              className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] mr-[9px] md:mr-[23.94px] ml-[8px]"
            />
            <input
              type="text"
              placeholder="Search GitHub username."
              className="text-[#4B6A9B] text-[13px] w-[184px] mr-[7px]"
              style={{ backgroundColor: theme ? "" : "#1E2A47" }}
            ></input>
            <button
              className="w-[84px] md:w-[106px] h-[46px] md:h-[50px] bg-[#0079FF] rounded-[10px] text-white text-[14px] md:text-[16px] font-bold mr-[8px] md:ml-[195px] xl:ml-[350px] "
              onClick={handeClick}
            >
              Search
            </button>
          </div>
        </form>
      </header>
      <main
        className="bg-white rounded-[15px] px-[24px] pt-[33px] pb-[49px] w-[327px] md:pb-[4.5px] md:w-[573px] xl:w-[730px] md:p-10 xl:p-[48px]"
        style={{ backgroundColor: theme ? "" : "#1E2A47" }}
      >
        <div>
          <div className="flex items-center mb-[34px] md:mb-[24px]">
            <img
              src={oval}
              alt="ovalImg"
              className="mr-[19px] md:mr-[41px] xl:mr-[37px] md:h-[117px] md:w-[117px] rounded-full"
            />
            <div>
              <h3
                className="text-[#2b3442] md:text-[26px] font-bold"
                style={{ color: theme ? "" : "#fff" }}
              >
                The Octocat
              </h3>
              <p
                className="text-[#0079FF] text-[13px] md:text-[16px]
              font-normal mb-[6px]"
              >
                @octocat
              </p>
              <p
                className="text-[#697C9A] text-[13px] md:text-[15px] font-normal"
                style={{ color: theme ? "" : "#fff" }}
              >
                Joined 25 Jan 2011
              </p>
            </div>
          </div>
          <p
            className="text-[#4B6A9B] text-[13px] md:text-[15px] font-normal leading-[25px] mb-[23px] md:mb-[32px] w-[279px] md:w-[470px] xl:ml-[155px]"
            style={{ color: theme ? "" : "#fff" }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Donec odio. Quisque volutpat mattis eros.
          </p>
          <div
            className="flex justify-evenly md:justify-around py-[19px] xl:py-[15px] md:py-[16px] px-[15px] bg-[#F6F8FF] rounded-[10px] mb-[24px] md:mb-[30px] xl:mb-[37px] xl:ml-[155px] xl:w-[480px] xl:h-[85px] xl:justify-between"
            style={{ backgroundColor: theme ? "" : "#141D2F" }}
          >
            <div className="flex flex-col items-center">
              <p
                className="text-[#4B6A9B] text-[11px] md:text-[13px]
              font-normal mb-[8px] xl:ml-[16px]"
                style={{ color: theme ? "" : "#fff" }}
              >
                Repos
              </p>
              <span
                className="text-[#2B3442] text-4 md:text-[22px] font-bold"
                style={{ color: theme ? "" : "#fff" }}
              >
                8
              </span>
            </div>
            <div className="flex flex-col items-center">
              <p
                className="text-[#4B6A9B] text-[11px]
              font-normal mb-[8px] md:text-[13px] "
                style={{ color: theme ? "" : "#fff" }}
              >
                Followers
              </p>
              <span
                className="text-[#2B3442] text-4 md:text-[22px] font-bold"
                style={{ color: theme ? "" : "#fff" }}
              >
                3938
              </span>
            </div>
            <div className="flex flex-col items-center xl:mr-10">
              <p
                className="text-[#4B6A9B] text-[11px]
              font-normal mb-[8px] md:text-[13px]"
                style={{ color: theme ? "" : "#fff" }}
              >
                Following
              </p>
              <span
                className="text-[#2B3442] text-4 md:text-[22px] font-bold"
                style={{ color: theme ? "" : "#fff" }}
              >
                9
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-[9px] xl:ml-[155px]">
          <div className="md:flex">
            <div className="md:mr-[65px]">
              <div className="flex items-center mb-[17px]">
                <img
                  src={location}
                  alt="locationImg"
                  className="mr-[19px]"
                  style={{ color: theme ? "" : "#fff" }}
                />
                <p style={{ color: theme ? "" : "#fff" }}>
                  San Francisco
                </p>
              </div>
              <div className="flex items-center mb-[17px]">
                <img
                  src={website}
                  alt="websiteImg"
                  className="mr-[13px]"
                />
                <p style={{ color: theme ? "" : "#fff" }}>
                  https://github.blog
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-[17px]">
                <img
                  src={twitter}
                  alt="twitterImg"
                  className="mr-[13px]"
                />
                <p style={{ color: theme ? "" : "#fff" }}>
                  Not Available
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={company}
                  alt="companyImg"
                  className="mr-[13px]"
                />
                <p style={{ color: theme ? "" : "#fff" }}>@github</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
