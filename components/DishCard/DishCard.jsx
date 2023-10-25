import { useState } from "react";
import DC_Header from "./SubComps/DC_Header";
import DC_Body from "./SubComps/DC_Body";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

const DishCard = ({ dishInfo, dishIndex }) => {
  const [isCollapsed, setCollapsed] = useState(dishIndex == 0 ? false : true);

  const handleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  const [hRef, { height }] = useMeasure();

  /*return (
    <div className="flex flex-col justify-center bg-white p-0 rounded-2xl shadow-xl overflow-clip w-full">
      <motion.div animate={{ height }} transition={{ duration: 0.15 }}>
        <AnimatePresence>
          <div ref={ref}>
            <DC_Header
              isCollapsed={isCollapsed}
              onCollapse={handleCollapse}
              dishName={dishInfo.name}
              dishCurrency={dishInfo.currency}
              dishPrice={dishInfo.price}
              dishSpice={dishInfo.spiceMeter}
              dishClass={dishInfo.dietaryClassification}
            />

            <DC_Body isCollapsed={isCollapsed} dishInfo={dishInfo} />
          </div>
        </AnimatePresence>
      </motion.div>
    </div>
  );*/

  return (
    <div className="flex flex-col justify-center bg-white p-0 rounded-2xl shadow-xl overflow-clip w-full">
      <div>
        <DC_Header
          isCollapsed={isCollapsed}
          onCollapse={handleCollapse}
          dishName={dishInfo.name}
          dishCurrency={dishInfo.currency}
          dishPrice={dishInfo.price}
          dishSpice={dishInfo.spiceMeter}
          dishClass={dishInfo.dietaryClassification}
        />
        <motion.div animate={{ height }} transition={{ duration: 0.15 }}>
          <AnimatePresence>
            <div ref={hRef}>
              <DC_Body isCollapsed={isCollapsed} dishInfo={dishInfo} />
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default DishCard;
