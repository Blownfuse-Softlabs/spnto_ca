import {
  getFormattedPrice,
  getDishSpiceURL,
  getDishClassURL,
} from "@/utils/dishInfoUtils.js";

import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, MotionConfig, animate, motion } from "framer-motion";

const DC_Header = ({
  isCollapsed,
  dishName,
  dishCurrency,
  dishPrice,
  dishSpice,
  dishClass,
}) => {
  const variantsBtnView = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 70 },
    exit: { opacity: 0, scale: 0 },
  };

  return (
    /*Header Container*/
    <MotionConfig transition={{ ease: "anticipate", duration: 0.2 }}>
      <div className="flex">
        {/*Dish Header Info*/}
        <AnimatePresence mode="popLayout">
          <motion.div
            key="dishHeaderInfo"
            layout
            className="flex w-full items-center gap-3 ml-3 mr-2 py-3"
          >
            {/*Chevron*/}
            <motion.div
              layout
              animate={isCollapsed ? { rotate: 0 } : { rotate: -180 }}
              className="flex flex-shrink-0"
            >
              <ChevronDownIcon className="text-spoon-blue h-5 w-5" />
            </motion.div>
            {/* <motion.div layout className="flex flex-shrink-0">
              {isCollapsed ? (
                <ChevronDownIcon className="text-spoon-blue h-5 w-5" />
              ) : (
                <ChevronUpIcon className="text-spoon-blue h-5 w-5" />
              )}
            </motion.div> */}

            {/*Dish Name & Price section*/}
            <motion.div
              layout
              className="flex flex-col items-start gap-1.5 w-full text-left"
            >
              <motion.h1
                layout
                className="text-spoon-blue font-semibold text-sm"
              >
                {dishName}
              </motion.h1>
              <motion.h2 layout className="text-spoon-red font-medium text-xs">
                {getFormattedPrice(dishCurrency, dishPrice)}
              </motion.h2>
            </motion.div>

            {/*Dish Spice & Classification section*/}
            <motion.div
              layout
              className="flex flex-col flex-shrink-0 justify-between items-end h-full"
            >
              <Image
                src={getDishSpiceURL(dishSpice)}
                width={16}
                height={16}
                alt="Spice level indicator"
              />
              <Image
                src={getDishClassURL(dishClass)}
                width={16}
                height={16}
                alt="Spice classification indicator"
              />
            </motion.div>
          </motion.div>
          {/* </AnimatePresence> */}

          {/*View Button*/}
          {/* <AnimatePresence mode="sync"> */}
          {isCollapsed === true && (
            <motion.button
              key="dishHeaderViewBtn"
              variants={variantsBtnView}
              initial="hidden"
              animate="visible"
              exit="exit"
              //initial={{ opacity: 0 }}
              //animate={{ opacity: 1 }}
              //exit={{ opacity: 0 }}
              className="bg-spoon-blue px-6 rounded-e-2xl"
            >
              <Image
                src="/icons/Icon_View_AR.svg"
                width={26}
                height={26}
                alt="View in AR"
              />
            </motion.button>
          )}
        </AnimatePresence>

        {/* <motion.button
          variants={variantsBtnView}
          initial="initial"
          animate={isCollapsed ? "visible" : "hidden"}
          className={`${isCollapsed ? "block" : "hidden"} bg-spoon-blue px-6`}
        >
          <Image
            src="/icons/Icon_View_AR.svg"
            width={26}
            height={26}
            alt="View in AR"
          />
        </motion.button> */}
      </div>
    </MotionConfig>
  );
};

export default DC_Header;
