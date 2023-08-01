import { useEffect, useState } from "react";
import "@google/model-viewer";
import ScrollableMenu from "@/components/ScrollableMenu/ScrollableMenu";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

const dishInfos = ["Info", "Ingredients", "Allergens"];

const DC_Body = ({ isCollapsed, dishInfo }) => {
  const [activeTab, setActiveTab] = useState({ tab: "Info", direction: 1 });
  const [prevIndex, setPrevIndex] = useState(0);
  const [ref, { height }] = useMeasure();
  const [wRef, { width }] = useMeasure();

  useEffect(() => {
    if (!isCollapsed) {
      // when it's not collapsed, i.e., it's expanded
      //setActiveTab({ tab: "Info", direction: 1 });
      handleTabChange("Info");
    }
  }, [isCollapsed]);

  const handleTabChange = (newActiveTab) => {
    const newActiveIndex = dishInfos.indexOf(newActiveTab);
    const direction = newActiveIndex > prevIndex ? 1 : -1;

    setPrevIndex(newActiveIndex);
    setActiveTab({ tab: newActiveTab, direction });
  };

  const variants = {
    hidden: {
      x: width * activeTab.direction,
    },
    show: {
      x: 0,
      transition: { duration: 0.5 },
    },

    exit: (direction) => ({
      x: -width * direction,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div
      ref={wRef}
      className={`${
        isCollapsed ? "hidden" : "flex flex-col"
      } pt-1.5 pb-2 text-sm border-2 border-black`}
    >
      <div id="card" className="p-6 border-2 border-blue-500">
        {
          <model-viewer
            src="https://dishmodels.s3.amazonaws.com/dumpukht_peshawar_food.glb"
            ios-src="https://dishmodels.s3.amazonaws.com/Dumpukht_Peshawar_food.usdz"
            poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
            alt="A 3D model of an astronaut"
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
            auto-rotate
            ar
            ar-scale="fixed"
            //ar-modes="webxr scene-viewer quick-look"
            //ar-modes="webxr"
          >
            <button
              slot="ar-button"
              id="ar-button"
              className="bg-spoon-blue p-2 text-spoon-beige text-xs"
            >
              View in your space Test 3
            </button>
          </model-viewer>
        }
      </div>

      <div className="bg-gradient-to-r from-white from-40% to-white w-full border-2 border-red-500">
        <ScrollableMenu
          menuItems={dishInfos}
          id={"dish-info-nav"}
          activeCourseCallback={handleTabChange}
        />
      </div>

      <motion.div
        animate={{ height: height || "auto" }}
        className="relative border-2 border-green-500"
      >
        <AnimatePresence custom={activeTab.direction} mode="sync">
          <motion.div
            key={activeTab.tab}
            custom={activeTab.direction}
            variants={variants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <div ref={ref} className="absolute">
              {activeTab.tab === "Info" && (
                <motion.div className="flex p-4  border-2 border-black">
                  <p className="text-spoon-blue text-sm font-light">
                    {dishInfo.description}
                  </p>
                </motion.div>
              )}
              {activeTab.tab === "Ingredients" && (
                <motion.div className="flex p-4  border-2 border-black">
                  <ul className="list-disc list-inside">
                    {dishInfo.ingredients.map((ingredient, index) => (
                      <li
                        key={index}
                        className="text-spoon-blue text-sm font-light"
                      >
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              {activeTab.tab === "Allergens" && (
                <motion.div className="flex p-4  border-2 border-black">
                  <ul className="list-disc list-inside">
                    {dishInfo.allergen.map((allergen, index) => (
                      <li
                        key={index}
                        className="text-spoon-blue text-sm font-light"
                      >
                        {allergen}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DC_Body;
