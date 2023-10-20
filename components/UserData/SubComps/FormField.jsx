const FormField = ({
  fieldID,
  fieldName,
  fieldType,
  fieldLabel,
  fieldPattern,
  fieldLength,
  fieldOnChange,
}) => {
  return (
    <div className="relative peer-placeholder-shown:bg-red-500">
      <input
        id={fieldID}
        name={fieldName}
        type={fieldType}
        pattern={fieldPattern ? fieldPattern : ""}
        maxLength={fieldLength ? fieldLength : 524288}
        onChange={() => fieldOnChange()}
        className="
            peer 
            h-11 w-full px-4
            rounded-none border-2

            border-transparent
            border-b-spoon-blue
            text-spoon-blue
            
            hover:border-spoon-red
            hover:rounded-lg
            
            focus:outline-none
            focus:bg-transparent         
            focus:text-spoon-red            
            focus:border-spoon-red            
            focus:rounded-lg

            placeholder:text-transparent
            
            transition-all"
        placeholder={fieldLabel}
      />
      <label
        htmlFor={fieldID}
        className="
                absolute 
                left-2 
                -top-3.5
                px-2                

                bg-white
                text-spoon-blue 
                text-sm font-medium

                transition-all               

                peer-placeholder-shown:bg-transparent
                peer-placeholder-shown:text-base 
                peer-placeholder-shown:font-normal 
                peer-placeholder-shown:text-gray-900 
                peer-placeholder-shown:top-2
                
                peer-focus:-top-3.5
                peer-focus:bg-white
                peer-focus:text-spoon-red
                peer-focus:text-sm
                peer-focus:font-medium"
      >
        {fieldLabel}
      </label>
    </div>
  );
};

export default FormField;
