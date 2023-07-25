import {
  getFormattedPrice,
  getDishSpiceURL,
  getDishClassURL,
} from "@/utils/dishInfoUtils.js";
import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const DC_Header = ({
  isCollapsed,
  dishName,
  dishCurrency,
  dishPrice,
  dishSpice,
  dishClass,
}) => {
  return (
    /*Header Container*/
    <div className="flex border-2 py-2 border-blue-500">
      {/*Dish Header Info*/}
      <div className="flex w-full items-center gap-1 mx-1 border-2 h-full border-red-500">
        {/*Chevron*/}
        <div className="flex flex-shrink-0 border-2 border-green-500">
          {isCollapsed ? (
            <ChevronDownIcon className="text-spoon-blue h-5 w-5" />
          ) : (
            <ChevronUpIcon className="text-spoon-blue h-5 w-5" />
          )}
        </div>

        {/*Dish Name & Price section*/}
        <div className="flex flex-col items-start gap-1 w-full text-left border-2 border-yellow-500">
          <h1 className="text-spoon-blue font-semibold text-sm">{dishName}</h1>
          <h2 className="text-spoon-red font-medium text-xs">
            {getFormattedPrice(dishCurrency, dishPrice)}
          </h2>
        </div>

        {/*Dish Spice & Classification section*/}
        <div className="flex flex-col flex-shrink-0 justify-between items-end h-full border-2 border-black">
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
        </div>
      </div>

      {/*View Button*/}
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

export default DC_Header;
