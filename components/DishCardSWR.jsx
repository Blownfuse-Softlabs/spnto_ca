import useRestaurant from "@/hooks/useRestaurant";
import Image from "next/image";

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

const DishCardSWR = ({ dishIndex }) => {
  const { restaurant, isLoading } = useRestaurant(1);

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
    <div className="flex bg-white p-0 rounded-2xl shadow-xl container gap-2">
      {/*Dish Name & Price section*/}
      <div className="flex flex-col gap-1 w-full ml-4 my-3">
        <h1 className="text-spoon-blue font-semibold text-md">
          {restaurant.menu[dishIndex].name}
        </h1>
        <h2 className="text-spoon-red font-medium text-sm">
          {restaurant.menu[dishIndex].price}
        </h2>
      </div>

      {/*Dish Spice & Classification section*/}
      {
        <div className="flex flex-col justify-between items-end mr-2 my-3">
          <Image
            src={dishSpiceURL}
            width={18}
            height={18}
            alt="Spice level indicator"
          />
          <Image
            src={dishClassURL}
            width={20}
            height={20}
            alt="Spice classification indicator"
          />
        </div>
      }

      <button className="bg-spoon-blue rounded-e-2xl px-6">
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
