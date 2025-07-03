import { useState } from "react";
import testIcon from "../assets/images/logo-devlens.svg";

export function FeatureCard() {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <div className="bg-white p-4 rounded-2xl m-4">
        <div className="flex flex-row gap-4">
          <img src={testIcon} className="self-start" alt="" />
          <div className="flex flex-col gap-y-2">
            <p className="font-extrabold text-2xl text-gray-700">title</p>{" "}
            <p className="text-xl text-gray-600">
              description ttttttttttttttttttttt tttttttttttt ttttttttttttttttt
              details
            </p>
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
