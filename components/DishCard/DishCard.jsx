import { useState } from "react";
import DC_Header from "./SubComps/DC_Header";
import DC_Body from "./SubComps/DC_Body";

const DishCard = ({ dishInfo }) => {
  const [isCollapsed, setCollapsed] = useState(true);

  const handleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="flex flex-col justify-center bg-white p-0 rounded-2xl shadow-xl overflow-clip w-full">
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
  );
};

export default DishCard;
