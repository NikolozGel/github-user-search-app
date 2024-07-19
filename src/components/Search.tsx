import moon from "/public/assets/icon-moon.svg";
import search from "/public/assets/icon-search.svg";

export default function Search() {
  return (
    <div className="pt-[31px] px-[24px]">
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
    </div>
  );
}
