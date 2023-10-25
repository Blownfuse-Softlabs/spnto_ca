import { AnimatePresence, motion, transform } from "framer-motion";
import DishCard from "../DishCard/DishCard";
import { useState } from "react";

const RestaurantMenu = ({ menuItems, course }) => {
  const fullMenu = menuItems;
  const courseFilteredMenu = fullMenu.filter((dish) => dish.course === course);

  return (
    <div className="flex flex-col items-center w-full px-4 pt-2 pb-10 gap-2">
      {courseFilteredMenu.map((dish, index) => (
        <motion.div
          className="w-full"
          key={dish.DishID}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <AnimatePresence>
            <DishCard key={dish.DishID} dishInfo={dish} dishIndex={index} />
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
