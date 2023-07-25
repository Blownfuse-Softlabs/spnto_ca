import { useState } from "react";
import DC_Header from "./SubComps/DC_Header";

const DishCard = () => {
  const [isCollapsed, setCollapsed] = useState(true);

  return (
    <div className="flex flex-col justify-center bg-white p-0 rounded-2xl shadow-xl overflow-clip w-full h-28">
      <DC_Header
        isCollapsed={isCollapsed}
        dishName={"Crab Cakes"}
        dishCurrency={"usd"}
        dishPrice={24.99}
        dishSpice={2}
        dishClass={"Non Veg"}
      />
    </div>
  );
};

export default DishCard;
