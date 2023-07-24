import useRestaurant from "@/hooks/useRestaurant";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

function getDishSpiceURL(spiceID) {
  return spiceID > 0 && spiceID < 4
    ? "/icons/Icon_Spice_" + spiceID + ".svg"
    : "icons/Icon_Spice_1.svg";
}

function getDishClassURL(classID) {
  return classID.replace(/\s+/g, "").toLowerCase() === "nonveg"
    ? "/icons/Icon_Class_NonVeg.svg"
    : "/icons/Icon_Class_Veg.svg";
}

function getFormattedPrice(currency, price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

const DishCardSWR = ({ dishIndex }) => {
  const { restaurant, isLoading } = useRestaurant(1);
  let [isCollapsed, setCollapsed] = useState(true);

  let dishSpiceURL = "";
  let dishClassURL = "";

  if (isLoading) {
    return (
      <div className="flex bg-spoon-grey p-8 h-full justify-center items-center">
        <h2 className="text-spoon-blue font-normal text-lg">
          Loading Menu Info
        </h2>
      </div>
    );
  }

  dishSpiceURL = getDishSpiceURL(restaurant.menu[dishIndex].spiceMeter);
  dishClassURL = getDishClassURL(
    restaurant.menu[dishIndex].dietaryClassification
  );

  return (
    <div className="flex bg-white p-0 rounded-2xl shadow-xl container overflow-hidden">
      <div
        className="flex w-full items-center"
        onClick={() => {
          setCollapsed(!isCollapsed);
        }}
      >
        {/*Chevron*/}
        <div className="flex flex-shrink-0 ml-4">
          {isCollapsed ? (
            <ChevronDownIcon className="text-spoon-blue h-5 w-5" />
          ) : (
            <ChevronUpIcon className="text-spoon-blue h-5 w-5" />
          )}
        </div>

        {/*Dish Name & Price section*/}
        <div className="flex flex-col items-start gap-1 w-full ml-4 my-3 text-left">
          <h1 className="text-spoon-blue font-semibold text-sm">
            {restaurant.menu[dishIndex].name}
          </h1>
          <h2 className="text-spoon-red font-medium text-xs">
            {getFormattedPrice(
              restaurant.menu[dishIndex].currency.toUpperCase(),
              restaurant.menu[dishIndex].price
            )}
          </h2>
        </div>

        {/*Dish Spice & Classification section*/}
        <div className="flex flex-col flex-shrink-0 justify-between items-end mx-2 py-3 h-full">
          <Image
            src={dishSpiceURL}
            width={16}
            height={16}
            alt="Spice level indicator"
          />
          <Image
            src={dishClassURL}
            width={16}
            height={16}
            alt="Spice classification indicator"
          />
        </div>
      </div>

      <button className="bg-spoon-blue px-6">
        <Image
          src="/icons/Icon_View_AR.svg"
          width={26}
          height={26}
          alt="View in AR"
        />
      </button>
    </div>
  );
};

export default DishCardSWR;
