import { useState } from "react";
import { FeatureCard } from "./FeatureCard";
import { HeaderSection } from "./HeaderSection";
import clsx from "clsx";
import cardData from "../assets/data.json";

export function MainPage() {
  const [allFilter, setAllFilter] = useState(true);
  const [activeFilter, setActiveFilter] = useState(false);
  const [inactiveFilter, setInactiveFilter] = useState(false);

  const [features, setFeatures] = useState(cardData);

  function handleRemove(logo) {
    setFeatures((features) => features.filter((el) => el.logo !== logo));
  }

  function handleToggle(logo) {
    setFeatures((features) =>
      features.map((feature) =>
        feature.logo === logo
          ? { ...feature, isActive: !feature.isActive }
          : feature
      )
    );
  }

  const allFilterStyle = clsx(
    "active:bg-red-500 bg-white px-4 py-2 rounded-full dark:bg-slate-700 dark:text-white",
    { "!bg-red-700": allFilter }
  );
  const activeFilterStyle = clsx(
    "active:bg-red-500 bg-white px-4 py-2 rounded-full dark:bg-slate-700 dark:text-white",
    { "!bg-red-700": activeFilter }
  );
  const inactiveFilterStyle = clsx(
    "active:bg-red-500 bg-white px-4 py-2 rounded-full dark:bg-slate-700 dark:text-white",
    { "!bg-red-700": inactiveFilter }
  );

  function handleAllFilter() {
    setAllFilter(true);
    setActiveFilter(false);
    setInactiveFilter(false);
  }

  function handleActiveFilter() {
    setActiveFilter(true);
    setInactiveFilter(false);
    setAllFilter(false);
  }

  function handleInactiveFilter() {
    setInactiveFilter(true);
    setActiveFilter(false);
    setAllFilter(false);
  }

  return (
    <>
      <main className="w-full md:max-w-6xl md:mx-auto">
        <HeaderSection />
        <div className="md:flex md:justify-between md:items-center">
          <h1 className="text-4xl md:text-left text-center font-bold text-black dark:text-white">
            Extensions List
          </h1>
          <div className="text-2xl font-medium md:gap-x-8 py-4  flex flex-row justify-evenly">
            <button onClick={handleAllFilter} className={allFilterStyle}>
              All
            </button>
            <button onClick={handleActiveFilter} className={activeFilterStyle}>
              Active
            </button>
            <button
              onClick={handleInactiveFilter}
              className={inactiveFilterStyle}
            >
              Inactive
            </button>
          </div>
        </div>
        <div className="md:grid md:grid-cols-3">
          {features.map((currentCard) => {
            if (allFilter) {
              return (
                <FeatureCard
                  key={currentCard.logo}
                  name={currentCard.name}
                  description={currentCard.description}
                  logo={currentCard.logo}
                  isActive={currentCard.isActive}
                  onToggle={() => handleToggle(currentCard.logo)}
                  onRemove={() => handleRemove(currentCard.logo)}
                />
              );
            }
            if (activeFilter) {
              if (currentCard.isActive) {
                return (
                  <FeatureCard
                    key={currentCard.logo}
                    name={currentCard.name}
                    description={currentCard.description}
                    logo={currentCard.logo}
                    isActive={currentCard.isActive}
                    onToggle={() => handleToggle(currentCard.logo)}
                    onRemove={() => handleRemove(currentCard.logo)}
                  />
                );
              }
            }
            if (inactiveFilter) {
              if (currentCard.isActive === false) {
                return (
                  <FeatureCard
                    key={currentCard.logo}
                    name={currentCard.name}
                    description={currentCard.description}
                    logo={currentCard.logo}
                    isActive={currentCard.isActive}
                    onToggle={() => handleToggle(currentCard.logo)}
                    onRemove={() => handleRemove(currentCard.logo)}
                  />
                );
              }
            }
          })}
        </div>
      </main>
    </>
  );
}
