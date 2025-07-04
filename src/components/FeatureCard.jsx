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

// const logoIcons = {
//   devLensIcon: "devLensIcon",
//   spyIcon: "spyIcon",
//   speedBoostIcon: "speedBoostIcon",
// };
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

export function FeatureCard({ logo, name, description, isActive }) {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <div className="bg-white p-4 rounded-2xl m-4">
        <div className="flex flex-row gap-4">
          <img src={logoIcons[logo]} className="self-start" alt="" />
          <div className="flex flex-col gap-y-2">
            <p className="font-extrabold text-2xl text-gray-700">{name}</p>{" "}
            <p className="text-xl text-gray-600">{description}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-8">
          <button className="text-lg border-2 border-gray-400 px-4 rounded-full">
            Remove
          </button>

          <div className="flex items-center gap-2 my-2">
            <button
              type="button"
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                enabled ? "bg-red-800" : "bg-gray-400"
              }`}
              onClick={() => setEnabled((v) => !v)}
            >
              <span
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  enabled ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
