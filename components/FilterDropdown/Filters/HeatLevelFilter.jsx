import Select from "react-select";

const options = [
  { value: "low", label: "Low" },
  { value: "mild", label: "Mild" },
  { value: "high", label: "High" },
];

const HeatLevelFilter = () => {
  return (
    <Select
      options={options}
      menuPortalTarget={document.querySelector("body")}
      styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
    />
  );
};

export default HeatLevelFilter;
