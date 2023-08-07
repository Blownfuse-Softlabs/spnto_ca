import Select from "react-select";

const options = [
  { value: "vegan", label: "Vegan" },
  { value: "vegetarian", label: "Vegetarian" },
  { value: "pescatarian", label: "Pescatarian" },
  { value: "nonVegetarian", label: "Non Vegetarian" },
  { value: "ketogenic", label: "Ketogenic" },
  { value: "paleo", label: "Paleo" },
  { value: "glutenFree", label: "Gluten Free" },
  { value: "dairyFree", label: "Dairy Free" },
  { value: "lowCarb", label: "Low Carb" },
  { value: "highProtein", label: "High Protein" },
  { value: "halal", label: "Halal" },
  { value: "kosher", label: "Kosher" },
  { value: "lowFat", label: "Low Fat" },
  { value: "lowSodium", label: "Low Sodium" },
];

const DietFilter = () => {
  return (
    <Select
      options={options}
      menuPortalTarget={document.querySelector("body")}
      className="z-50"
    />
  );
};

export default DietFilter;
