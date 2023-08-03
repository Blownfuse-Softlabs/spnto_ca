import useRestaurant from "@/hooks/useRestaurant";
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollableMenu from "@/components/ScrollableMenu/ScrollableMenu";
import ScrollableNav from "./ScrollableNav/ScrollableNav";
import FilterDropdown from "./FilterDropdown/FilterDropdown";

function getMenuCourses(menuArray) {
  const uniqueCourses = [...new Set(menuArray.map((item) => item.course))];

  return uniqueCourses;
}

const NavSWR = () => {
  const { restaurant, isLoading } = useRestaurant(1);
  let [activeCourse, setActiveCourse] = useState("Loading");

  const [activeCourseData, setActiveCourseData] = useState("");
  const childToParent = (childData) => {
    setActiveCourseData(childData);
    console.log(activeCourseData);
  };

  let menuCourses = null;

  if (isLoading) {
    return (
      <div className="flex bg-spoon-grey p-8 h-full justify-center items-center">
        <h2 className="text-spoon-blue font-normal text-lg">
          Loading Restaurant Info
        </h2>
      </div>
    );
  }

  menuCourses = getMenuCourses(restaurant.menu);

  if (activeCourse === "Loading") {
    setActiveCourse(menuCourses[0]);
  }

  return (
    <div className="flex flex-col w-full bg-spoon-grey pt-6 pb-2 gap-4">
      {/*Restaurant Name section*/}
      <div className="flex flex-col px-4">
        <h2 className="text-spoon-blue font-normal text-lg">Welcome to</h2>
        <h1 className="text-spoon-blue font-medium text-xl">
          {restaurant.brand[0].name}
        </h1>
      </div>

      {/*Filter Dropdown Section*/}
      <div className="flex justify-center items-center">
        <FilterDropdown showBorder={false} />
      </div>

      {/*<div className="flex justify-center items-center">
        <button className="bg-spoon-red text-spoon-beige font-light text-sm w-full py-2 rounded-full shadow-xl text-center z-10">
          Choose what's shown
        </button>
  </div>*/}

      {/*Menu Courses*/}
      <div className="bg-gradient-to-r from-spoon-grey from-40% to-spoon-grey w-full">
        <ScrollableMenu
          menuItems={menuCourses}
          id={"course-nav"}
          activeCourseCallback={childToParent}
        />
      </div>
    </div>
  );
};

export default NavSWR;
