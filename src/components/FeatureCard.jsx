import { useState } from "react";
//logo-icons import
import devLensIcon from "../assets/images/logo-devlens.svg";
import spyIcon from "../assets/images/logo-style-spy.svg";
import speedBoostIcon from "../assets/images/logo-speed-boost.svg";
import jsonWizard from "../assets/images/logo-json-wizard.svg";
import tabMasterIcon from "../assets/images/logo-tab-master-pro.svg";
import viewPortIcon from "../assets/images/logo-viewport-buddy.svg";
import markUpIcon from "../assets/images/logo-markup-notes.svg";
import gridGuidesIcon from "../assets/images/logo-grid-guides.svg";
import palettePickerIcon from "../assets/images/logo-palette-picker.svg";
import linkCheckerIcon from "../assets/images/logo-link-checker.svg";
import domSnapIcon from "../assets/images/logo-dom-snapshot.svg";
import consolePlusIcon from "../assets/images/logo-console-plus.svg";

const logoIcons = {
  devLensIcon,
  spyIcon,
  speedBoostIcon,
  jsonWizard,
  tabMasterIcon,
  viewPortIcon,
  markUpIcon,
  gridGuidesIcon,
  palettePickerIcon,
  linkCheckerIcon,
  domSnapIcon,
  consolePlusIcon,
};

export function FeatureCard({
  logo,
  name,
  description,
  isActive,
  onToggle,
  onRemove,
}) {
  const [isFading, setIsFading] = useState(false);

  function handleRemoveClick() {
    setIsFading(true);
    setTimeout(() => {
      onRemove();
    }, 4000);
  }

  return (
    <>
      <div
        className={`bg-white p-4 rounded-2xl m-4 dark:bg-slate-800 ${
          isFading
            ? "opacity-5 border-2  border-dashed border-red-500 animate-pulse duration-75 ease-out "
            : "opacity-100"
        }`}
      >
        <div className="flex flex-row gap-4">
          <img src={logoIcons[logo]} className="self-start" alt="" />
          <div className="flex flex-col gap-y-2 ">
            <p className="font-extrabold text-2xl text-gray-700 dark:text-white">
              {name}
            </p>{" "}
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-8">
          <button
            onClick={handleRemoveClick}
            className="text-lg border-2 border-gray-400 px-4 dark:text-white rounded-full active:bg-rose-500"
          >
            Remove
          </button>

          <div className="flex items-center gap-2 my-2">
            <button
              type="button"
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                isActive ? "bg-red-800" : "bg-gray-400"
              }`}
              onClick={onToggle}
            >
              <span
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  isActive ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
