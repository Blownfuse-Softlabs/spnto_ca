import { useState } from "react";
import ScrollableMenu from "@/components/ScrollableMenu/ScrollableMenu";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { getDishCDN_Model, getDishCDN_Poster } from "@/utils/dishInfoUtils";

var dishInfos = ["Info", "Ingredients", "Allergens"];

const DC_Body = ({ isCollapsed, dishInfo }) => {
  //var modelViewer = document.querySelector("model-viewer");
  var modelViewers = document.querySelectorAll("model-viewer");

  /*modelViewer?.addEventListener("load", () => {
    if (!hasCheckedAR) {
      setIsARAvailable(modelViewer.canActivateAR);
      setHasCheckedAR(true);
      console.log("AR Supported: " + isARAvailable);
    }
  });*/
  modelViewers.forEach((modelViewer) => {
    modelViewer?.addEventListener("ar-status", (event) => {
      console.log("AR BUTTON CLICKED");
      console.log(event);
      if (event.detail.status === "failed" && hasARFailied == false) {
        setHasARFailed(true);
        console.log("Failed To View AR");
      }
    });
  });

  dishInfos = dishInfo.nutritional
    ? ["Info", "Ingredients", "Allergens", "Nutrition"]
    : ["Info", "Ingredients", "Allergens"];

  //const [hasCheckedAR, setHasCheckedAR] = useState(false);
  //const [isARAvailable, setIsARAvailable] = useState(false);
  const [hasARFailied, setHasARFailed] = useState(false);
  const [activeTab, setActiveTab] = useState({ tab: "Info", direction: 1 });
  const [prevIndex, setPrevIndex] = useState(0);
  const [ref, { height }] = useMeasure();
  const [wRef, { width }] = useMeasure();

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
      transition: { duration: 0.25 },
    },

    exit: (direction) => ({
      x: -width * direction,
      transition: { duration: 0.25 },
    }),
  };

  return (
    <div
      ref={wRef}
      className={`${
        isCollapsed ? "hidden" : "flex flex-col"
      } pt-1.5 pb-2 text-sm`}
    >
      <div
        id="card"
        className="flex px-2 pt-2 pb-4 w-full justify-center items-center relative"
      >
        <model-viewer
          src={getDishCDN_Model(dishInfo.glb)}
          ios-src={getDishCDN_Model(dishInfo.usdz)}
          poster={
            dishInfo.poster
              ? getDishCDN_Poster(dishInfo.poster)
              : "/logos/SpoontooLogo_Square_256.png"
          }
          alt="A 3D model of an astronaut"
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y"
          auto-rotate
          ar
          ar-scale="fixed"
          ar-modes="webxr scene-viewer quick-look"
          //ar-modes="webxr"
          //ar-modes="scene-viewer"
        >
          <button
            slot="ar-button"
            id="ar-button"
            className={`bg-spoon-red shadow-2xl p-2 text-spoon-beige text-xs rounded-full w-full bottom-0 absolute ${
              hasARFailied ? "hidden" : "block"
            }`}
          >
            View dish on your table
          </button>
          {hasARFailied && (
            <div
              className={`border-2 border-spoon-red shadow-2xl p-2 text-spoon-blue text-xs text-center rounded-full w-full bottom-0 absolute `}
            >
              Sorry, your phone doesn't support AR!
            </div>
          )}
        </model-viewer>
      </div>
      <div className="bg-gradient-to-r from-white from-40% to-white w-full">
        <ScrollableMenu
          menuItems={dishInfos}
          id={"dish-info-nav"}
          activeCourseCallback={handleTabChange}
        />
      </div>
      <motion.div animate={{ height: height || "auto" }} className="relative">
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
                <motion.div className="flex p-4">
                  <p className="text-spoon-blue text-sm font-light">
                    {dishInfo.description}
                  </p>
                </motion.div>
              )}
              {activeTab.tab === "Ingredients" && (
                <motion.div className="flex p-4">
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
                <motion.div className="flex p-4">
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
              {activeTab.tab === "Nutrition" && (
                <motion.div className="flex p-4">
                  <ul className="list-disc list-inside">
                    {dishInfo.nutritional.map((nutrition, index) => (
                      <li
                        key={index}
                        className="text-spoon-blue text-sm font-light"
                      >
                        {nutrition}
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
