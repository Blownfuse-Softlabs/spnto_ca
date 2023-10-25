"use client";

import { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import { useSearchParams } from "next/navigation";
import useRestaurant from "@/hooks/useRestaurant";
import RestaurantMenu from "@/components/RestaurantMenu/RestaurantMenu";
import PrimaryNav from "@/components/PrimaryNav/PrimaryNav";

//import spoonLogo from "/public/logos/SpoontooLogo_Spoon.svg"
import { letsBakeMuffins } from "./layout";
import UserDataHandling from "@/components/UserData/UserDataHandling";

//import Link from "next/link";

ReactGA.initialize("G-KYDL4C972F");

export default function Home() {
  var customerName = null;
  var customerPhone = null;
  if (typeof window !== "undefined") {
    customerName = window.localStorage.getItem("name");
    customerPhone = window.localStorage.getItem("phone");
  }
  const searchParams = useSearchParams();
  const brandIDQuery = searchParams.get("brandID");

  const { restaurant, isLoading, isError } = useRestaurant(
    brandIDQuery ? parseInt(brandIDQuery) : 1
  );
  const [activeCourse, setActiveCourse] = useState();

  const handleCourseChange = (newActiveCourse) => {
    setActiveCourse(newActiveCourse);
  };

  const [userDataCollected, setUserDataCollected] = useState(
    customerName && customerPhone
  );
  const HandleUserDataSuccess = () => {
    setUserDataCollected(true);
  };

  useEffect(() => {
    // This is where we will initialize Model Viewer.
    // We'll do this asynchronously because it's a heavy operation.
    import("@google/model-viewer")
      .then(({ ModelViewerElement }) => {
        // Here, ModelViewerElement is now available and can be used.
        customElements.get("model-viewer") ||
          customElements.define("model-viewer", ModelViewerElement);
      })
      .catch((error) => {
        console.error("Error loading Model Viewer", error);
      });
  }, []); // We pass an empty dependency array so this runs once on mount.

  ReactGA.send({ hitType: "pageview", title: "Menu Page" });

  if (isLoading) {
    return (
      <div className="flex bg-spoon-grey p-8 w-screen h-screen justify-center items-center">
        <h2 className="text-spoon-blue font-normal text-lg">
          Loading Menu Info
        </h2>
      </div>
    );
  }

  if (restaurant.brand.length == 0) {
    return (
      <div className="flex bg-spoon-grey p-8 w-screen h-screen justify-center items-center">
        <h2 className="text-spoon-blue font-normal text-lg">
          There was an error
        </h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex bg-spoon-grey p-8 w-screen h-screen justify-center items-center">
        <h2 className="text-spoon-blue font-normal text-lg">
          There was an error
        </h2>
      </div>
    );
  }

  return (
    <>
      <main className="lg:w-[500px] md:m-auto flex flex-col items-center bg-spoon-grey w-screen h-screen overflow-scroll">
        {restaurant.brand[0].collectUserData &&
          (!customerName || !customerPhone || !userDataCollected) && (
            <UserDataHandling
              brandID={restaurant.brand[0].BrandID}
              onSuccess={HandleUserDataSuccess}
            />
          )}
        <PrimaryNav
          brandInfo={restaurant.brand[0]}
          activeNavCallback={handleCourseChange}
        />
        <RestaurantMenu
          menuItems={restaurant.menu}
          course={activeCourse ? activeCourse : restaurant.brand[0].courses[0]}
        />
        <div className="flex flex-col justify-center items-center w-full gap-4 pb-10">
          <div className="flex gap-2 justify-center items-center">
            <p className="text-gray-400 text-sm">Love the experience?</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSerGbCAOb5eL0jMxInmxWJluiFnbR_zCzCKUotEiPlro9urDQ/viewform?usp=sf_link"
              className="py-1 px-2 rounded-lg shadow-md bg-white text-sm text-spoon-red"
            >
              Let us know
            </a>
          </div>
          <p className="text-gray-400 text-xs">
            Powered by{" "}
            <span
              className={`${letsBakeMuffins.className} text-spoon-red text-xl`}
            >
              spoontoo
            </span>
          </p>
          <p className="text-gray-400 text-xs">v0.23</p>
        </div>
        <div className="fixed bottom-0 w-full h-10 bg-gradient-to-t from-spoon-grey z-50" />
      </main>

      {/*<main className="landscape:hidden flex flex-col items-center px-4 bg-gradient-to-b from-spoon-red from-60% to-spoon-orange w-screen h-screen overflow-clip">
      
      <motion.div initial={{y: 1000}} animate={{y:160}} transition={{duration: 0.5, type: "spring"}} className="translate-y-40">
        <Image src={spoonLogo} alt="Spoontoo Logo" className="w-full"/>      
      </motion.div>
  </main>  */}
    </>
  );
}
