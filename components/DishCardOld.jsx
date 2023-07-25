import Image from "next/image";

//FOR TESTING
const dishName = "Fried Wontons";
const dishPrice = "INR 250";
const dishSpice = 3;
const dishClassification = "Non Veg";
const dishSpiceURL =
  dishSpice > 0 && dishSpice < 4
    ? "/icons/Icon_Spice_" + dishSpice + ".svg"
    : "icons/Icon_Spice_1.svg";
const dishClassURL =
  dishClassification.replace(/\s+/g, "").toLowerCase() === "nonveg"
    ? "/icons/Icon_Class_NonVeg.svg"
    : "/icons/Icon_Class_Veg.svg";

/*function getSpiceImage(dishSpice) {
  let dishSpiceURL =
  dishSpice > 0 && dishSpice < 4
    ? "/icons/Icon_Spice_" + dishSpice + ".svg"
    : "icons/Icon_Spice_1.svg";

    return dishSpiceURL;
}*/

const DishCard = ({ dishInfo }) => {
  //const spiceLevelData = dishInfo.spiceMeter;
  //console.log(dishInfo);
  //let dishSpice = dishInfo.spiceMeter;
  //let dishClassification = dishInfo.dietaryClassification;

  return (
    <div className="flex bg-white p-0 rounded-2xl shadow-xl container gap-2">
      {/*Dish Name & Price section*/}
      <div className="flex flex-col gap-1 w-full ml-4 my-3">
        <h1 className="text-spoon-blue font-semibold text-md">
          {dishInfo.name}
        </h1>
        <h2 className="text-spoon-red font-medium text-sm">{dishInfo.price}</h2>
      </div>
      {/*Dish Spice & Classification section*/}
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

export default DishCard;
