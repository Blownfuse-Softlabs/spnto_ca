import axios from "axios";
import FormField from "./SubComps/FormField";
import { useState } from "react";

const UserDataHandling = ({ brandID, onSuccess }) => {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const HandleNameChange = () => {
    setNameValue(document.getElementById("name").value);
  };

  const HandlePhoneChange = () => {
    setPhoneValue(document.getElementById("phone").value);
  };

  return (
    <section className="absolute left-0 flex items-center justify-center p-4 w-full h-full m-auto bg-black/50 z-[100] backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center p-6 gap-6 w-full rounded-xl shadow-lg bg-white">
        <h1 className="font-semibold text-2xl text-spoon-red">Hello!</h1>
        <h2>Please provide us with your details</h2>
        <form className="flex flex-col gap-6 w-full">
          <FormField
            fieldID="name"
            fieldName="name"
            fieldType="text"
            fieldLabel="Full Name"
            fieldOnChange={HandleNameChange}
          />

          <FormField
            fieldID="phone"
            fieldName="phone"
            fieldType="tel"
            fieldLabel="Mobile Number"
            fieldLength={10}
            fieldOnChange={HandlePhoneChange}
          />
        </form>
        <button
          className="flex items-center justify-center w-full p-2 bg-spoon-red text-white font-medium rounded-lg shadow-lg disabled:bg-spoon-red/30 transition-all"
          onClick={() => SubmitForm(brandID, nameValue, phoneValue, onSuccess)}
          disabled={
            nameValue.length == 0 ||
            phoneValue.length == 0 ||
            phoneValue.length != 10
          }
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default UserDataHandling;

async function SubmitForm(brandID, nameValue, phoneValue, onSuccess) {
  const respone = await axios.post(
    "https://3wknjhpnq4.execute-api.us-east-1.amazonaws.com/spoontoo_sample/newuser?brandID=" +
      brandID +
      "&phone=" +
      phoneValue +
      "&name=" +
      nameValue
  );
  if (respone.status == 200) {
    window.localStorage.setItem("name", nameValue);
    window.localStorage.setItem("phone", phoneValue);
    onSuccess();
  }
  console.log(respone);
}
