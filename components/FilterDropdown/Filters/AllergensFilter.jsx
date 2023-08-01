import Select from "react-select";

const options = [
  { value: "peanuts", label: "Peanuts" },
  { value: "treeNuts", label: "Tree nuts" },
  { value: "milk", label: "Milk" },
  { value: "egg", label: "Egg" },
  { value: "wheat", label: "Wheat" },
  { value: "soy", label: "Soy" },
  { value: "fish", label: "Fish" },
  { value: "shellfish", label: "Shellfish" },
  { value: "sesame", label: "Sesame" },
  { value: "mustard", label: "Mustard" },
  { value: "sulphites", label: "Sulphites" },
  { value: "lupin", label: "Lupin" },
];

const AllergensFilter = () => {
  return (
    <Select
      isMulti
      options={options}
      menuPortalTarget={document.querySelector("body")}
    />
  );
};

export default AllergensFilter;
