import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import headerIcon from "../assets/images/logo.svg";

export function HeaderSection() {
  return (
    <>
      <header className="flex flex-row justify-between m-4 p-2 bg-white rounded-md shadow-sm shadow-black">
        <img src={headerIcon} alt="" />
        <img
          src={moonIcon}
          className="size-12 self-center p-2 rounded-xl bg-gray-200"
          alt=""
        />
      </header>
    </>
  );
}
