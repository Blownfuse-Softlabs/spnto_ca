import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import Accordion from "../Accordion/Accordian";
import DietFilter from "./Filters/DietFilter";
import AllergensFilter from "./Filters/AllergensFilter";
import HeatLevelFilter from "./Filters/HeatLevelFilter";
import PriceRangeFilter from "./Filters/PriceRangeFilter";
import useMeasure from "react-use-measure";

const FilterDropdown = ({ showBorder = true }) => {
  const [isShown, setIsShown] = useState(false);
  const [ref, { height }] = useMeasure();

  return (
    <MotionConfig transition={{ duration: 0.25 }}>
      <div
        className={`flex flex-col justify-center items-center w-full shadow-xl rounded-2xl z-50`}
      >
        <motion.button
          layout
          className={`flex bg-spoon-red text-spoon-beige font-light text-sm w-full px-3 py-2 text-center z-10`}
          onClick={() => setIsShown(!isShown)}
          animate={{ borderRadius: isShown ? "1rem 1rem 0 0" : "2rem" }}
        >
          <motion.div
            layout
            animate={isShown ? { rotate: -180 } : { rotate: 0 }}
            className="flex flex-shrink-0"
          >
            <ChevronDownIcon className="text-spoon-beige h-5 w-5" />
          </motion.div>
          <h1 className="w-full pr-4">Choose what's shown</h1>
        </motion.button>

        <motion.div
          animate={{ height }}
          className="w-full rounded-b-2xl overflow-clip"
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={isShown}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="relative"
            >
              {isShown &&
                (showBorder ? (
                  <div
                    ref={ref}
                    className="flex bg-spoon-red rounded-b-2xl w-full absolute"
                  >
                    <div className="bg-white rounded-b-[0.9rem] w-full m-0.5 p-3 z-50">
                      <Accordion
                        title="Diet"
                        content={<DietFilter />}
                        defaultOpen={true}
                      />
                      <Accordion
                        title="Allergens"
                        content={<AllergensFilter />}
                      />
                      <Accordion
                        title="Heat Level"
                        content={<HeatLevelFilter />}
                      />
                      <Accordion
                        title="Price Range"
                        content={<PriceRangeFilter />}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    ref={ref}
                    className="bg-white w-full p-3 rounded-b-2xl absolute"
                  >
                    <Accordion
                      title="Diet"
                      content={<DietFilter />}
                      defaultOpen={true}
                    />
                    <Accordion
                      title="Allergens"
                      content={<AllergensFilter />}
                    />
                    <Accordion
                      title="Heat Level"
                      content={<HeatLevelFilter />}
                    />
                    {/*<Accordion
                      title="Price Range"
                      content={<PriceRangeFilter />}
                />*/}
                  </div>
                ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default FilterDropdown;
