import { FeatureCard } from "./FeatureCard";
import { HeaderSection } from "./HeaderSection";

export function MainPage() {
  return (
    <>
      <main className="w-full">
        <HeaderSection />
        <div>
          <h1 className="text-4xl text-center font-bold text-black my-6">
            Extensions List
          </h1>
          <div className="text-2xl font-medium *:active:bg-red-500 flex flex-row justify-evenly *:bg-white *:px-4 *:py-2 *:rounded-full">
            <button>All</button>
            <button>Active</button>
            <button>Inactive</button>
          </div>
        </div>
        <FeatureCard />
      </main>
    </>
  );
}
