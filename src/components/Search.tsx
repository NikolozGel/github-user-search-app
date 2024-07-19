import moon from "/public/assets/icon-moon.svg";
import search from "/public/assets/icon-search.svg";
import oval from "/public/assets/Oval.svg";
import location from "/public/assets/icon-location.svg";
import website from "/public/assets/icon-website.svg";
import twitter from "/public/assets/icon-twitter.svg";
import company from "/public/assets/icon-company.svg";

export default function Search() {
  return (
    <div className="pt-[31px] px-[24px] pb-[79px] md:pt-[109px] md:w-[573px]">
      <header className="mb-4 ">
        <div className="flex justify-between items-center mb-[35px] md:w-[573px]">
          <h1
            className="text-[#222731] text-[26px]
        font-bold mr-[121px]"
          >
            devfinder
          </h1>
          <div className="flex">
            <h3 className="text-[#4B6A9B] text-[13px] font-bold tracking-[2.5px]">
              DARK
            </h3>
            <img src={moon} alt="moonImg" className="ml-[16px]" />
          </div>
        </div>
        <form>
          <div className="w-[327px] h-[60px] md:h-[69px] bg-white rounded-[15px] flex justify-stretch items-center pl-[16px] md:w-[573px]">
            <img
              src={search}
              alt="searchImg"
              className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] mr-[9px] md:mr-[23.94px] ml-[8px]"
            />
            <input
              type="text"
              placeholder="Search GitHub username."
              className="text-[#4B6A9B] text-[13px] w-[184px] mr-[7px]"
            ></input>
            <button className="w-[84px] md:w-[106px] h-[46px] md:h-[50px] bg-[#0079FF] rounded-[10px] text-white text-[14px] md:text-[16px] font-bold mr-[8px] md:ml-[195px] ">
              Search
            </button>
          </div>
        </form>
      </header>
      <main className="bg-white rounded-[15px] px-[24px] pt-[33px] pb-[49px] md:pb-[4.5px] md:w-[573px] md:p-10">
        <div>
          <div className="flex items-center mb-[34px] md:mb-[24px]">
            <img
              src={oval}
              alt="ovalImg"
              className="mr-[19px] md:mr-[41px] md:h-[117px] md:w-[117px]"
            />
            <div>
              <h3 className="text-[#2b3442] md:text-[26px] font-bold ">
                The Octocat
              </h3>
              <p
                className="text-[#0079FF] text-[13px] md:text-[16px]
              font-normal mb-[6px]"
              >
                @octocat
              </p>
              <p className="text-[#697C9A] text-[13px] md:text-[15px] font-normal">
                Joined 25 Jan 2011
              </p>
            </div>
          </div>
          <p className="text-[#4B6A9B] text-[13px] md:text-[15px] font-normal leading-[25px] mb-[23px] md:mb-[32px] w-[279px] md:w-[470px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Donec odio. Quisque volutpat mattis eros.
          </p>
          <div className="flex justify-evenly md:justify-around py-[19px] md:py-[16px] px-[15px] bg-[#F6F8FF] rounded-[10px] mb-[24px] md:mb-[30px]">
            <div className="flex flex-col items-center">
              <p
                className="text-[#4B6A9B] text-[11px] md:text-[13px]
              font-normal mb-[8px]"
              >
                Repos
              </p>
              <span className="text-[#2B3442] text-4 md:text-[22px] font-bold">
                8
              </span>
            </div>
            <div className="flex flex-col items-center">
              <p
                className="text-[#4B6A9B] text-[11px]
              font-normal mb-[8px] md:text-[13px]"
              >
                Followers
              </p>
              <span className="text-[#2B3442] text-4 md:text-[22px] font-bold">
                3938
              </span>
            </div>
            <div className="flex flex-col items-center">
              <p
                className="text-[#4B6A9B] text-[11px]
              font-normal mb-[8px] md:text-[13px]"
              >
                Following
              </p>
              <span className="text-[#2B3442] text-4 md:text-[22px] font-bold">
                9
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-[9px] ">
          <div className="md:flex">
            <div className="md:mr-[65px]">
              <div className="flex items-center mb-[17px]">
                <img
                  src={location}
                  alt="locationImg"
                  className="mr-[19px]"
                />
                <p>San Francisco</p>
              </div>
              <div className="flex items-center mb-[17px]">
                <img
                  src={website}
                  alt="websiteImg"
                  className="mr-[13px]"
                />
                <p>https://github.blog</p>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-[17px]">
                <img
                  src={twitter}
                  alt="twitterImg"
                  className="mr-[13px]"
                />
                <p>Not Available</p>
              </div>
              <div className="flex items-center">
                <img
                  src={company}
                  alt="companyImg"
                  className="mr-[13px]"
                />
                <p>@github</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
