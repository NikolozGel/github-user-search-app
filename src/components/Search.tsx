import moon from "/public/assets/icon-moon.svg";
import search from "/public/assets/icon-search.svg";

export default function Search() {
  return (
    <div>
      <div>
        <h1>devfinder</h1>
        <h3>DARK</h3>
        <img src={moon} alt="moonImg" />
      </div>
      <form>
        <div>
          <img src={search} alt="searchImg" />
          <input
            type="text"
            placeholder="Search GitHub username…"
          ></input>
        </div>
      </form>
    </div>
  );
}
