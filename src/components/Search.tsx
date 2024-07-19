import moon from "/public/assets/icon-moon.svg";
import search from "/public/assets/icon-search.svg";
import oval from "/public/assets/Oval.svg";

export default function Search() {
  return (
    <div className="pt-[31px] px-[24px]">
      <header className="mb-4">
        <div className="flex justify-between items-center mb-[35px]">
          <h1
            className="text-[#222731] text-[26px]
        font-bold mr-[121px]"
          >
            devfinder
          </h1>
          <h3 className="text-[#4B6A9B] text-[13px] font-bold tracking-[2.5px]">
            DARK
          </h3>
          <img src={moon} alt="moonImg" />
        </div>
        <form>
          <div className="w-[327px] h-[60px] bg-white rounded-[15px] flex justify-stretch items-center pl-[16px]">
            <img
              src={search}
              alt="searchImg"
              className="w-[20px] h-[20px] mr-[9px]"
            />
            <input
              type="text"
              placeholder="Search GitHub username..."
              className="text-[#4B6A9B] text-[13px] w-[184px] mr-[7px]"
            ></input>
            <button className="w-[84px] h-[46px] bg-[#0079FF] rounded-[10px] text-white text-[14px] font-bold">
              Search
            </button>
          </div>
        </form>
      </header>
      <main className="bg-white rounded-[15px] px-[24px] pt-[33px] pb-[49px]">
        <div>
          <div className="flex items-center mb-[34px]">
            <img src={oval} alt="" className="mr-[19px]" />
            <div>
              <h3 className="text-[#2b3442] font-bold">
                The Octocat
              </h3>
              <p
                className="text-[#0079FF] text-[13px]
              font-normal mb-[6px]"
              >
                @octocat
              </p>
              <p className="text-[#697C9A] text-[13px] font-normal">
                Joined 25 Jan 2011
              </p>
            </div>
          </div>
          <p className="text-[#4B6A9B] text-[13px] font-normal leading-[25px] mb-[23px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Donec odio. Quisque volutpat mattis eros.
          </p>
          <div className="flex justify-evenly ">
            <div className="flex flex-col items-center">
              <p>Repos</p>
              <span>8</span>
            </div>
            <div className="flex flex-col items-center">
              <p>Followers</p>
              <span>3938</span>
            </div>
            <div className="flex flex-col items-center">
              <p>Following</p>
              <span>9</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
