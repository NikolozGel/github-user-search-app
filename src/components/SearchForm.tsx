import searchImg from "/assets/icon-search.svg";
import oval from "/assets/Oval.svg";
import location from "/assets/icon-location.svg";
import website from "/assets/icon-website.svg";
import twitter from "/assets/icon-twitter.svg";
import company from "/assets/icon-company.svg";
import { useEffect, useState, useRef } from "react";
import sun from "/assets/icon-sun.svg";
import moon from "/assets/icon-moon.svg";
import { UserType } from "./UserTypes";

export default function Search() {
  const [theme, setTheme] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  const [user, setUser] = useState<UserType | undefined>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : undefined;
  });

  const searcInput = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (searcInput.current) {
      searcInput.current.focus();
    }
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const getUser = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${searcInput.current?.value}`
      );
      if (!response.ok) {
        throw new Error("User not found");
      }

      const jsonData = await response.json();
      setUser(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  const createdAt = user?.created_at;
  const dateObject: Date = new Date(createdAt as string);
  const year = dateObject.getUTCFullYear();
  const monthName = dateObject.toLocaleString("default", {
    month: "long",
  });
  const month = dateObject.getUTCMonth();

  return (
    <div
      className="pt-16 flex flex-col items-center md:w-[573px]-screen xl:w-[730px]-screen w-screen h-[100vh]"
      style={{ backgroundColor: theme ? "#F6F8FF" : "#141D2F" }}
    >
      <header className="mb-4">
        <div className="flex justify-between items-center w-[327px] mb-[35px] md:w-[573px] xl:w-[730px]">
          <h1
            className="text-[#222731] text-[26px]
        font-bold mr-[121px] cursor-pointer"
            style={{ color: theme ? "" : "#FFF" }}
          >
            devfinder
          </h1>
          <div
            className="flex cursor-pointer"
            onClick={() => {
              setTheme((prev) => !prev);
            }}
          >
            {theme ? (
              <h3
                className="text-[#4B6A9B] text-[13px] font-bold tracking-[2.5px]"
                style={{ color: theme ? "" : "#FFF" }}
              >
                DARK
              </h3>
            ) : (
              <h3
                className="text-[#4B6A9B] text-[13px] font-bold tracking-[2.5px]"
                style={{ color: theme ? "" : "#FFF" }}
              >
                LIGHT
              </h3>
            )}

            {theme ? (
              <img src={moon} alt="moonImg" className="ml-[10px]" />
            ) : (
              <img src={sun} alt="sunImg" className="ml-[10px]" />
            )}
          </div>
        </div>
        <form>
          <div
            className="h-[60px] md:h-[69px] bg-white rounded-[15px] flex justify-stretch items-center pl-[16px] md:w-[573px] xl:w-[730px]"
            style={{ backgroundColor: theme ? "" : "#1E2A47" }}
          >
            <img
              src={searchImg}
              onClick={handleImageClick}
              alt="searchImg"
              className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] mr-[9px] md:mr-[23.94px] ml-[8px] cursor-pointer"
            />
            <input
              type="text"
              placeholder="Search GitHub username."
              className="text-[#4B6A9B] text-[13px] w-[180px] h-[35px] mr-[7px] p-2 md:w-[379px] xl:w-[537px]"
              style={{ backgroundColor: theme ? "" : "#1E2A47" }}
              ref={searcInput}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  getUser();
                }
              }}
              defaultValue={"octocat"}
            ></input>
            <button
              className="w-[84px] md:w-[106px] h-[46px] md:h-[50px] bg-[#0079FF] rounded-[10px] text-white text-[14px] md:text-[16px] font-bold mr-[8px]"
              onClick={(e) => {
                e.preventDefault();
                getUser();
                searcInput.current?.value;
              }}
            >
              Search
            </button>
          </div>
        </form>
      </header>
      <main
        className="bg-white rounded-[15px] px-[24px] pt-[33px]  w-[327px] md:pb-[4.5px] md:w-[573px] xl:w-[730px] md:p-10 xl:p-[48px]"
        style={{ backgroundColor: theme ? "" : "#1E2A47" }}
      >
        <div>
          <div className="flex items-center mb-[34px] md:mb-[24px]">
            <img
              src={!user?.avatar_url ? oval : user?.avatar_url}
              alt="ovalImg"
              className="mr-[19px] h-[70px] w-[70px] md:mr-[41px] xl:mr-[37px] md:h-[117px] md:w-[117px] rounded-full"
            />
            <div>
              <h3
                className="text-[#2b3442] md:text-[26px] font-bold"
                style={{ color: theme ? "" : "#fff" }}
              >
                {user?.name}
              </h3>
              <p
                className="text-[#0079FF] text-[13px] md:text-[16px]
              font-normal mb-[6px]"
              >
                {user?.login}
              </p>
              <p
                className="text-[#697C9A] text-[13px] md:text-[15px] font-normal"
                style={{ color: theme ? "" : "#fff" }}
              >
                {`Joined ${month} ${monthName} ${year}`}
              </p>
            </div>
          </div>
          <p
            className="text-[#4B6A9B] text-[13px] md:text-[15px] font-normal leading-[25px] mb-[23px] md:mb-[32px] w-[279px] md:w-[470px] xl:ml-[155px]"
            style={{ color: theme ? "" : "#fff" }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
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
                {!user?.public_repos ? "0" : user?.public_repos}
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
                {!user?.followers ? "0" : user?.followers}
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
                {!user?.following ? "0" : user?.following}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-[9px] xl:ml-[155px]">
          <div className="md:flex">
            <div className="mr-[62px]">
              <div className="flex items-center mb-[17px]">
                <img
                  src={location}
                  alt="locationImg"
                  className="mr-[19px]"
                  style={{ color: theme ? "" : "#fff" }}
                />
                <p style={{ color: theme ? "" : "#fff" }}>
                  {!user?.location ? "Not available" : user.location}
                </p>
              </div>
              <div className="flex items-center mb-[17px]">
                <img src={website} alt="websiteImg" className="mr-[13px]" />
                <p style={{ color: theme ? "" : "#fff" }}>
                  {!user?.blog ? "Not Available" : user?.blog}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-[17px] md:w-[10rem] xl-[10rem]">
                <img src={twitter} alt="twitterImg" className="mr-[13px]" />
                <p style={{ color: theme ? "" : "#fff" }}>
                  {!user?.twitter_userName
                    ? "Not Available"
                    : user?.twitter_userName}
                </p>
              </div>

              <div className="flex items-center">
                <img src={company} alt="companyImg" className="mr-[13px]" />
                <p style={{ color: theme ? "" : "#fff" }}>
                  {!user?.company ? "Not Available" : user?.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
